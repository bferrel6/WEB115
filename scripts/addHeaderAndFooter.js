// generate navigation bar using 3 arguments
function navBar(nav, linkNames, linkHREFs) {
    for (let i = 0; i < linkNames.length; i++) {
        let link = document.createElement('a')
        link.innerHTML = linkNames[i]
        link.href = linkHREFs[i]
        nav.append(link)
    }
}

function addHeader() {
    // create header element at top of body
    const header = document.createElement('header')
    document.body.prepend(header)

    // add standard heading
    const h1 = document.createElement('h1')
    const name = "Ben Ferrell"
    const mascot = "Bleak Fenrir"
    const course = "WEB115"
    h1.innerHTML = `${name}'s ${mascot} | ${course}`
    header.append(h1)

    // add nav container
    const nav = document.createElement('nav')
    header.append(nav)

    // add navigation links
    const navLinkNames = [
        'home',
        'introduction',
        'contract',
        'brand',
        'code play',
        'fizzbuzz',
        'one page site'
    ];
    
    const navLinkHREFs = [
        'index.html',
        'introduction.html',
        'contract.html',
        'brand.html',
        'ccp.html',
        'fizzbuzz0.html',
        'onepagesite/index.html'
    ];

    navBar(nav, navLinkNames, navLinkHREFs)

    // add hr line
    const line = document.createElement('hr')
    header.append(line)
}

function addSubHead() {
    // add subheader at top of main only to fizzbuzz pages
    if (document.getElementById('buzz')) { 
        const main = document.getElementById('buzz')
        
        // add nav container
        const nav = document.createElement('nav')
        main.prepend(nav)

        // add navigation links
        const navLinkNames = [
            'fizzbuzz 0',
            'fizzbuzz 1',
            'fizzbuzz 2',
            'fizzbuzz 3',
            'fizzbuzz 4'
        ];

        const navLinkHREFs = [
            'fizzbuzz0.html',
            'fizzbuzz1.html',
            'fizzbuzz2.html',
            'fizzbuzz3.html',
            'fizzbuzz4.html'
        ];

        navBar(nav, navLinkNames, navLinkHREFs)
    }
}

function addFooter() {
    // create footer element at end of body
    const footer = document.createElement('footer')
    document.body.append(footer)

    // add hr line
    const line = document.createElement('hr')
    footer.append(line)

    // add nav container
    const nav = document.createElement('nav')
    footer.append(nav)

    // add navigation links
    const navLinkNames = [
        'github',
        'github.io',
        'WEB115.io',
        'freeCodeCamp',
        'codecademy',
        'jsfiddle',
        'linkedIn'
    ];

    const navLinkHREFs = [
        'https://github.com/bferrel6',
        'https://bferrel6.github.io',
        'https://bferrel6.github.io/web115',
        'https://www.freecodecamp.org/bferrel6',
        'https://www.codecademy.com/profiles/bferrel6',
        'https://jsfiddle.net/user/bferrel6/fiddles/',
        'https://www.linkedin.com/in/benjamin-ferrell-7361301a6'
    ];
    
    navBar(nav, navLinkNames, navLinkHREFs)

    // add signature
    const sigContent = `Designed by <strong>&copy;Mithril WebForge</strong> - <em>Renowned Across the Multiverse</em>`
    const signature = document.createElement('p')
    signature.innerHTML = sigContent
    footer.append(signature)

    // add validation block
    const validationLinks = `
            <a href="http://validator.w3.org/check?uri=referer" id="validation_link_html">Validate HTML</a>
            <a href="http://jigsaw.w3.org/css-validator/check/referer" id="validation_link_css">Validate CSS</a>
        `
    const validationBlock = document.createElement('div')
    validationBlock.classList.add('validate')
    validationBlock.innerHTML = validationLinks
    footer.append(validationBlock)

    // update validation links based on the current page
    document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
    document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
}

window.onload = 
    addHeader();
    addSubHead(); 
    addFooter();