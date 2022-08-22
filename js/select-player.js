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

    // const playerObj = {
    //     playerName: playerName,
    // }

    /* button disable after click */
    element.disabled = true;


    /* take a loop for check just 5 players */
    if (nameArray.length < 5) {
        nameArray.push(playerName);
    }
    else {
        alert('Dont be added more than 5 player')
    }


    // console.log(nameArray);



    document.getElementById('total-name-add').innerText = nameArray.length;
    display(nameArray);
}