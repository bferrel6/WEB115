document.getElementById('send').onclick = function welcome() {

    // delete prior loop text if found
    clearFlood()

    // create object for username
    const userName = {
        first: document.getElementById('firstName').value,
        middleInitial: document.getElementById('middleInitial').value,
        last: document.getElementById('lastName').value
    }

    const greetingBase = "Thank you for choosing <em>Veloniti</em>&trade;, ";

    // update names to proper case
    function properName(name) {
        return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    }
    userName.first = properName(userName.first);
    userName.last = properName(userName.last);

    // show alert and update greeting 
    if (userName.middleInitial !== '') {
        userName.middleInitial = properName(userName.middleInitial);
        alert(`Welcome, ${userName.first} ${userName.middleInitial}. ${userName.last}!`);
        greetingBanner = `${greetingBase} ${userName.first} ${userName.middleInitial}. ${userName.last}!`;
    } else {
        alert(`Welcome, ${userName.first} ${userName.last}!`);
        greetingBanner = `${greetingBase} ${userName.first} ${userName.last}!`;
    }
    document.getElementById('greeting').innerHTML = greetingBanner; 

    // run loop function
    textFloodLoop();

    return false;
}

function textFloodLoop() { 

    // define and insert new element
    const floodList = document.createElement('ol');
    floodList.classList.add('loopText');
    floodList.setAttribute('id', 'loopFlood');

    const launchForm = document.getElementById('launch');
    launchForm.insertAdjacentElement('afterend', floodList);

    // function to test for divisibility
    function checkDivision(firstValue, secondValue) {return (firstValue % secondValue === 0) ? true : false; }

    // load variables from the launch form
    let firstDivisor = parseInt(document.getElementById('divisor1').value);
    let firstWord = document.getElementById('word1').value;
    let secondDivisor = parseInt(document.getElementById('divisor2').value);
    let secondWord = document.getElementById('word2').value;
    let thirdDivisor = parseInt(document.getElementById('divisor3').value);
    let thirdWord = document.getElementById('word3').value;
    let limit = parseInt(document.getElementById('limit').value) + 1; // add 1 to match index to the number of each ordered list item
    let defaultWord = document.getElementById('defaultWord').value;

    // loop to fill element with new items
    for (let i = 1; i < limit; i++) {
        const floodItem = document.createElement('li');
        let divisibleByFirst = checkDivision(i, firstDivisor) ? firstWord : ''; 
        let divisibleBySecond = checkDivision(i, secondDivisor) ? secondWord : '';
        let divisibleByThird = checkDivision(i, thirdDivisor) ? thirdWord : ''; 
        let textLine = `${divisibleByFirst} ${divisibleBySecond} ${divisibleByThird}`;
        textFlood = (textLine.replace(/\s+/g, '') == false) ? defaultWord : textLine;
        floodItem.innerHTML = textFlood;
        floodList.append(floodItem);
    };
    return false;
};

// reset page and form
document.getElementById('clear').onclick = function resetPage() {
    document.getElementById('greeting').innerHTML = 'Prepare to Engage, New <em>Veloniti</em>&trade; Pilot'; 
    document.getElementById('launch').reset();
    clearFlood();
    return false;
}

// delete prior loop text if found
function clearFlood() {
    oldFlood = document.getElementById('loopFlood')
    if (oldFlood != null) {
        document.getElementById('loopFlood').remove();
    } else { return }
}