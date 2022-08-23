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

    /* take a loop for check just 5 players */
    if (nameArray.length < 5) {
        nameArray.push(playerName);
        element.disabled = true; /* button disable after click */
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

// common function
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

document.getElementById('btn-player').addEventListener('click', function () {
    const playerBudget = getInputFieldValueById('player-budget');
    if (isNaN(playerBudget)) {
        alert('Please provide a valid number');
        return;
    }

    let nameAddedNumber = getTextElementValueById('total-name-add');
    console.log(nameAddedNumber);

    const playerExpenses = playerBudget * nameAddedNumber;
    console.log(playerExpenses);

    const playerExpensesField = document.getElementById('player-expenses');
    playerExpensesField.innerText = playerExpenses; //player expense update

})

document.getElementById('btn-total').addEventListener('click', function () {
    const managerCost = getInputFieldValueById('manager-cost');
    if (isNaN(managerCost)) {
        alert('Please provide a valid number');
        return;
    }

    const coachCost = getInputFieldValueById('coach-cost');
    if (isNaN(coachCost)) {
        alert('Please provide a valid number');
        return;
    }

    const playerExpensesValue = getTextElementValueById('player-expenses');

    const totalCost = playerExpensesValue + managerCost + coachCost;

    const totalCostField = document.getElementById('total-cost');
    totalCostField.innerText = totalCost; //total cost update
})