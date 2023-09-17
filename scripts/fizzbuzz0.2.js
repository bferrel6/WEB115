document.getElementById('send').onclick = function welcome() {
    
    /* create object for username*/
    const userName = {
        first: document.getElementById('firstName').value,
        middleInitial: document.getElementById('middleInitial').value,
        last: document.getElementById('lastName').value
    };

    /* show alert and update greeting*/
    if (userName.middleInitial !== '') {
        alert(`Welcome, ${userName.first} ${userName.middleInitial}. ${userName.last}!`)
        greetingBanner = `Welcome to <em>Veloniti</em>&trade;, ${userName.first} ${userName.middleInitial}. ${userName.last}!`
    } else {
        alert(`Welcome, ${userName.first} ${userName.last}!`)
        greetingBanner = `Welcome to <em>Veloniti</em>&trade;, ${userName.first} ${userName.last}!`
    };
    document.getElementById('greeting').innerHTML = greetingBanner; 

    /* run loop function */
    textFloodLoop();

    return false;
};

function textFloodLoop() { 
    
    /* define and insert new element*/
    const newText = document.createElement('ol');
    newText.classList.add('loopText');
    newText.setAttribute('id', 'loopFlood');

    const banner = document.getElementById('greeting');
    banner.insertAdjacentElement('afterend', newText);

    /* loop to fill element */
    let firstName = document.getElementById('firstName').value;
    let limit = prompt(`How many star systems have you visited, ${firstName}?`)
    let textFlood = '';
    for (let i = 0; i < limit; i++) {
        if (i % 2 == 0){
            textFlood = textFlood + '<li>&#9733; SAIL THE STARS &#9733; the number is odd</li>';
        } else {
            textFlood = textFlood + '<li>&#9733; SAIL THE STARS &#9733; the number is even</li>';
        }
    }; 
    newText.innerHTML = textFlood;
};

document.getElementById('clear').onclick = function resetPage() {

    /*delete loop text, clear form and reset header*/
    document.getElementById('greeting').innerHTML = 'Welcome to <em>Veloniti</em>&trade;'; 
    document.getElementById('loopFlood').remove();
    document.getElementById('user').reset();
    
    return false;
}