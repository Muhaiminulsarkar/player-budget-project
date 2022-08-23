const nameArray = [];

function display(name) {

    console.log(name);
    const playerNames = document.getElementById('player-names');
    playerNames.innerHTML = '';

    for (let i = 0; i < name.length; i++) {
        const namePlayer = (nameArray[i]);
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td><span>${i + 1} - </span> ${namePlayer}</td>`
        playerNames.appendChild(tr);
    }
}

function addName(element) {
    const playerName = element.parentNode.children[0].innerText;

    /* button disable after click */
    element.disabled = true;


    /* take a loop for check just 5 players */
    if (nameArray.length < 5) {
        nameArray.push(playerName);
    }
    else {
        alert('Dont be added more than 5 player')
    }

    document.getElementById('total-name-add').innerText = nameArray.length;
    display(nameArray);
}

// common function
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

document.getElementById('btn-player').addEventListener('click', function () {
    const playerBudget = getInputFieldValueById('player-budget');
    console.log(playerBudget);

    let nameAddedNumber = getTextElementValueById('total-name-add');
    console.log(nameAddedNumber);

    const playerExpenses = playerBudget * nameAddedNumber;
    console.log(playerExpenses);

    const playerExpensesField = document.getElementById('player-expenses');
    const playerExpensesStringValue = playerExpensesField.innerText;
    const playerExpensesValue = parseFloat(playerExpensesStringValue);

    playerExpensesField.innerText = playerExpenses; //player expense update


})