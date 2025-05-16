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

// Result Output
const resultOutput = document.querySelector('#result-output');

// Bottom Results Messages Container
const resultsMsgsContainer = document.querySelector('#results-msgs-container');

// Tip Split Message
const tipSplitMsg = document.querySelector('#tip-split-msg');
const tipSplitMsgPercentage = document.querySelector('#tip-split-msg-percentage');
const tipSplitMsgBill = document.querySelector('#tip-split-msg-bill');
const tipSplitMsgSplitters = document.querySelector('#tip-split-msg-splitters');
const tipSplitMsgSplit = document.querySelector('#tip-split-msg-split');

// Bill Tip Total Message
const billTipTotalMsg = document.querySelector('#bill-tip-total-msg');
const billTipTotalMsgBill = document.querySelector('#bill-tip-total-msg-bill');
const billTipTotalMsgTip = document.querySelector('#bill-tip-total-msg-tip');
const billTipTotalMsgTotal = document.querySelector('#bill-tip-total-msg-total');


function calculateTip(bill, tipPercent) {
    return bill * tipPercent;
}

function handleFormInput(e) {
    const billVal = Number(billInput.value);
    const tipVal = Number(tipPercentageInput.value) / 100;
    const tip = calculateTip(billVal, tipVal);

    tipDollarDisplay.textContent = tip === 0 ? '$0' : `$${tip.toFixed(2)}`;
    resultOutput.textContent = billVal === 0 ? '$0' : `$${(billVal + tip).toFixed(2)}`;
}

function resetForm(form) {
    form.reset();
}

function toggleSplitUI(e) {
    e.preventDefault();

    if (splitContainer.style.display === 'none') {
        splitContainer.style.display = 'flex';
        splitTipBtn.textContent = 'cancel split';
    } else {
        splitContainer.style.display = 'none';
        splitTipBtn.textContent = 'split tip';
    }
}


// Event Listeners
billInput.addEventListener('keyup', handleFormInput);
billInput.addEventListener('change', handleFormInput);
tipPercentageInput.addEventListener('keyup', handleFormInput);
tipPercentageInput.addEventListener('change', handleFormInput);
    // tip buttons
document.querySelectorAll('#tip-btn-container > *').forEach(button => button.addEventListener('click', () => {
    tipPercentageInput.value = Number(button.value) * 100;
    handleFormInput();
}));
    // reset button
document.querySelector('#reset-btn').addEventListener('click', e => {
    resetForm(tipForm);
    tipDollarDisplay.textContent = "$0";
    resultOutput.textContent = "$0";
});
    // split ui toggle
splitTipBtn.addEventListener('click', toggleSplitUI);
    // split count
for (let button of splitBtnContainer.children) {
    button.addEventListener('click', e => {
        splitCountInput.value = button.value;
    })
};

