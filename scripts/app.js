// Tip Calculation Form
const tipForm = document.querySelector('#tip-form');
// Bill Entry
const billContainer = document.querySelector('#bill-container');
const billInput = document.querySelector('#bill-input');
const plusIcon = document.querySelector('#multiplication-icon');
// Tip Entry
const tipContainer = document.querySelector('#tip-container');
const tipPercentageInputContainer = document.querySelector('#tip-percentage-input-container');
const tipPercentageInput = document.querySelector
('#tip-percentage-input');
const tipNumbersContainer = document.querySelector('#tip-numbers-container');
const tipDollarDisplay = document.querySelector('#tip-dollar-display');
const tipBtnContainer = document.querySelector('#tip-btn-container');
const splitTipBtn = document.querySelector('#split-tip-btn');
// Split Entry
const splitContainer = document.querySelector('#split-container');
const splitCountInputContainer = document.querySelector('#split-count-input-container');
const splitCountInput = document.querySelector('#split-count-input');
const splitBtnContainer = document.querySelector('#split-btn-container');
const equalsIcon = document.querySelector('#equals-icon');
const splitResult = document.querySelector('#split-result');
// Result Output
const resultOutput = document.querySelector('#result-output');
// Tip Split Message
const tipSplitMsg = document.querySelector('#tip-split-msg');
const tipSplitMsgPercentage = document.querySelector('#tip-split-msg-percentage');
const tipSplitMsgBill = document.querySelector('#tip-split-msg-bill');
const tipSplitMsgSplitters = document.querySelector('#tip-split-msg-splitters');
const tipSplitMsgSplit = document.querySelector('#tip-split-msg-split');

billInput.focus();

// Functions
function handleFormInput(e) {
    const billVal = Number(billInput.value);
    const tipVal = Number(tipPercentageInput.value) / 100;
    const tip = billVal * tipVal;

    tipDollarDisplay.textContent = tip === 0 ? '$0' : `$${tip.toFixed(2).replace('.00', '')}`;
    resultOutput.textContent = billVal === 0 ? '$0' : `$${(billVal + tip).toFixed(2).replace('.00', '')}`;

    const split = Math.round(splitCountInput.value);
    const splitVal = tip / split ;

    if (split && (billVal > 0 && billVal < Infinity) && (tipVal > 0 && tipVal < Infinity)) {
        splitResult.textContent = `$${splitVal.toFixed(2).replace('.00', '')} per person`
    } else {
            splitResult.textContent = '$0 per person';
    }

}

function toggleSplit(e) {
    e.preventDefault();
    if (splitContainer.style.display === 'none') {
        splitContainer.style.display = 'flex';
        splitTipBtn.textContent = 'no split';
        splitCountInput.value = 2;          
        splitCountInput.focus(); 
        splitCountInput.select();           
    } else {
        splitContainer.style.display = 'none';
        splitTipBtn.textContent = 'split tip';
        splitCountInput.value = "";
        splitResult.textContent = '$0 per person';
    }
}


// Event Listeners
    // tip input
billInput.addEventListener('keyup', handleFormInput);
billInput.addEventListener('change', handleFormInput);
tipPercentageInput.addEventListener('keyup', handleFormInput);
tipPercentageInput.addEventListener('change', handleFormInput);

    // tip buttons
document.querySelectorAll('#tip-btn-container > *').forEach(button => button.addEventListener('click', () => {
    tipPercentageInput.value = Number(button.dataset.tipVal) * 100;
    handleFormInput();
}));

    // reset button
document.querySelector('#reset-btn').addEventListener('click', e => {
    tipForm.reset();
    splitContainer.style.display = 'none';
    splitTipBtn.textContent = 'split tip';
    splitResult.textContent = "$0 per person";
    tipDollarDisplay.textContent = "$0";
    resultOutput.textContent = "$0";
});

    // split toggle
splitTipBtn.addEventListener('click', toggleSplit);

    // split count input
splitCountInput.addEventListener('keyup', e => {
    const handleSplitInput = handleFormInput(e);
    handleSplitInput();
});
splitCountInput.addEventListener('change', e => {
    const handleSplitInput = handleFormInput(e);
    handleSplitInput();
});

    // split count buttons
for (let button of splitBtnContainer.children) {
    button.addEventListener('click', e => {
        splitCountInput.value = button.value;
        const handleSplitInput = handleFormInput(e);
        handleSplitInput();
    })
};