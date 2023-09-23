document.getElementById('send').onclick = function welcome() {
    
    /* create object for username*/
    const userName = {
        first: document.getElementById('firstName').value,
        middleInitial: document.getElementById('middleInitial').value,
        last: document.getElementById('lastName').value
    };
    const greetingBase = "Welcome to <em>Veloniti</em>&trade;,"

    /* show alert and update greeting*/
    if (userName.middleInitial !== '') {
        alert(`Welcome, ${userName.first} ${userName.middleInitial}. ${userName.last}!`)
        greetingBanner = `${greetingBase} ${userName.first} ${userName.middleInitial}. ${userName.last}!`
    } else {
        alert(`Welcome, ${userName.first} ${userName.last}!`)
        greetingBanner = `${greetingBase} ${userName.first} ${userName.last}!`
    };
    document.getElementById('greeting').innerHTML = greetingBanner; 

    /* run loop function */
    textFloodLoop();

    return false;
};

function textFloodLoop() { 

    /* define and insert new element*/
    const floodList = document.createElement('ol');
    floodList.classList.add('loopText');
    floodList.setAttribute('id', 'loopFlood');

    const banner = document.getElementById('greeting');
    banner.insertAdjacentElement('afterend', floodList);

    /* loop to fill element with new items*/
    // let firstName = document.getElementById('firstName').value;
    // let limit = prompt(`How many star systems have you visited, ${firstName}?`)
    for (let i = 0; i < 140; i++) {
        const floodItem = document.createElement('li');
        let divisibleBy3 = ((i + 1) % 3 == 0) ? 'ROCKET' : '';
        let divisibleBy5 = ((i + 1) % 5 == 0) ? 'LAUNCH' : '';
        textFlood = divisibleBy3 + ' ' + divisibleBy5;
        floodItem.innerHTML = textFlood;
        floodList.append(floodItem);
    };
};

document.getElementById('clear').onclick = function resetPage() {

    /*delete loop text, clear form and reset header*/
    document.getElementById('greeting').innerHTML = 'Welcome, Future <em>Veloniti</em>&trade; Pilot'; 
    document.getElementById('loopFlood').remove();
    document.getElementById('user').reset();
    
    return false;
}