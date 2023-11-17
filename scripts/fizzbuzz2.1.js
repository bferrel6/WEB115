document.getElementById('send').onclick = function welcome() {
    
    // delete prior loop text if found
    clearFlood()

    /* create object for username*/
    const userName = {
        first: document.getElementById('firstName').value,
        middleInitial: document.getElementById('middleInitial').value,
        last: document.getElementById('lastName').value
    };
    
    const greetingBase = "Welcome to <em>Veloniti</em>&trade;"

    // update names to proper case
    function properName(name) {
    return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    }
    userName.first = properName(userName.first);
    userName.last = properName(userName.last);

    // update greeting based on name entered
    if (userName.first == '' && userName.last == '') { 
        greetingBanner = greetingBase
    } else if (userName.middleInitial !== '') {
        greetingBanner = `${greetingBase}, ${userName.first} ${userName.middleInitial}. ${userName.last}!`
    } else {
        greetingBanner = `${greetingBase}, ${userName.first} ${userName.last}!`
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
    let firstDivisor = parseInt(prompt('Prepare to Launch\nEnter a primary quantum divisor: ', 3));
    let secondDivisor = parseInt(prompt('Launch Imminent\nEnter a secondary quantum divisor: ', 5));

    // loop to fill element with new items, integrating new function
    limit = 140 + 1 // add 1 to match index to the number of each ordered list item
    for (let i = 1; i < limit; i++) {
        const floodItem = document.createElement('li');
        let divisibleByFirst = checkDivision(i, firstDivisor) ? 'ROCKET' : ''; 
        let divisibleBySecond = checkDivision(i, secondDivisor) ? 'LAUNCH' : ''; 
        textFlood = (divisibleByFirst == false && divisibleBySecond == false) ? 'STARS' : divisibleByFirst + ' ' + divisibleBySecond;
        floodItem.innerHTML = textFlood;
        floodList.append(floodItem);
    }
}

document.getElementById('clear').onclick = function resetPage() {

    // reset header
    document.getElementById('greeting').innerHTML = 'Welcome, Future <em>Veloniti</em>&trade; Pilot';  
    
    // clear form if not blank
    form = document.getElementById('launch')
    if (form) {
        form.reset();
    } else {return}   

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