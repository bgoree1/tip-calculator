// Tip Calculation Form
const tipForm = document.querySelector('#tip-form');

// Bill Entry
const billContainer = document.querySelector('#bill-container');
const billInput = document.querySelector('#bill-input');
const plusIcon = document.querySelector('#multiplication-icon');

// Tip Entry
const tipContainer = document.querySelector('#tip-container');
const tipPercentageInputContainer = document.querySelector('#tip-percentage-input-container');
const tipPercentageInput = document.querySelector('#tip-percentage-input');
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
    const tipVal = Number(tipPercentageInput.value)
    const tip = calculateTip(billVal, tipVal);

    resultOutput.textContent = billVal === 0 ? '$0' : `$${(billVal + tip).toFixed(2)}`;
}

tipPercentageInput.addEventListener('keyup', handleFormInput);
billInput.addEventListener('keyup', handleFormInput);
// tip buttons
document.querySelectorAll('#tip-btn-container > *').forEach(button => button.addEventListener('click', () => {
    tipPercentageInput.value = button.value;
    handleFormInput();
}));
