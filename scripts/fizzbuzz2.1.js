document.getElementById('send').onclick = function welcome() {
    
    // create object for username
    const userName = {
        first: document.getElementById('firstName').value,
        middleInitial: document.getElementById('middleInitial').value,
        last: document.getElementById('lastName').value
    };
    const greetingBase = "Welcome to <em>Veloniti</em>&trade;, "

    // show alert and update greeting 
    if (userName.middleInitial !== '') {
        alert(`Welcome, ${userName.first} ${userName.middleInitial}. ${userName.last}!`)
        greetingBanner = `${greetingBase} ${userName.first} ${userName.middleInitial}. ${userName.last}!`
    } else {
        alert(`Welcome, ${userName.first} ${userName.last}!`)
        greetingBanner = `${greetingBase} ${userName.first} ${userName.last}!`
    };
    document.getElementById('greeting').innerHTML = greetingBanner; 

    // run loop function
    textFloodLoop();

    return false;
};

function textFloodLoop() { 

    // define and insert new element
    const floodList = document.createElement('ol');
    floodList.classList.add('loopText');
    floodList.setAttribute('id', 'loopFlood');

    const banner = document.getElementById('greeting');
    banner.insertAdjacentElement('afterend', floodList);

    // function to test for divisibility
    function checkDivision(firstValue, secondValue) {return (firstValue % secondValue === 0) ? true : false; }
    let firstDivisor = parseInt(prompt('Prepare to Launch\nEnter a primary quantum divisor: ', 3))
    let secondDivisor = parseInt(prompt('Launch Imminent\nEnter a secondary quantum divisor: ', 5))

    // loop to fill element with new items, integrating new function
    limit = 140 + 1 // add 1 to match index to the number of each ordered list item
    for (let i = 1; i < limit; i++) {
        const floodItem = document.createElement('li');
        let divisibleByFirst = checkDivision(i, firstDivisor) ? 'ROCKET' : ''; 
        let divisibleBySecond = checkDivision(i, secondDivisor) ? 'LAUNCH' : ''; 
        textFlood = (divisibleByFirst == false && divisibleBySecond == false) ? 'STARS' : divisibleByFirst + ' ' + divisibleBySecond;
        floodItem.innerHTML = textFlood;
        floodList.append(floodItem);
    };
};

document.getElementById('clear').onclick = function resetPage() {

    // delete loop text, clear form and reset header
    document.getElementById('greeting').innerHTML = 'Welcome, Future <em>Veloniti</em>&trade; Pilot'; 
    document.getElementById('loopFlood').remove();
    document.getElementById('user').reset();
    
    return false;
}