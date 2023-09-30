function addHeader() {
    // create header element at top of body
    const header = document.createElement('header')
    document.body.prepend(header)

    // add title h1
    const title = document.createElement('h1')
    title.innerHTML = "Ben Ferrell's Bleak Fenrir | WEB115"
    header.append(title)

    // add nav container
    const nav = document.createElement('nav')
    header.append(nav)

    // add unordered list inside nav
    const navList = document.createElement('ul')
    nav.append(navList)

    // add navigation links
    const navListItems = `
        <li class="navButton"><a class="navLink" href="index.html">home</a></li>
        <li class="navButton"><a class="navLink" href="introduction.html">introduction</a></li>
        <li class="navButton"><a class="navLink" href="contract.html">contract</a></li>
        <li class="navButton"><a class="navLink" href="brand.html">brand</a></li>
        <li class="navButton"><a class="navLink" href="ccp.html">code play</a></li>
        <li class="navButton"><a class="navLink" href="fizzbuzz0.html">fizzbuzz</a></li>
    `
    navList.innerHTML = navListItems

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

        // add unordered list inside nav
        const navList = document.createElement('ul')
        nav.append(navList)

        // add navigation links
        const navListItems = `
            <li class="navButton"><a class="navLink" href="fizzbuzz0.html">fizzbuzz 0</a></li>
            <li class="navButton"><a class="navLink" href="fizzbuzz1.html">fizzbuzz 1</a></li>
            <li class="navButton"><a class="navLink" href="fizzbuzz2.html">fizzbuzz 2</a></li>
        `
        navList.innerHTML = navListItems
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

    // add unordered list inside nav
    const navList = document.createElement('ul')
    nav.append(navList)

    // add navigation links
    const navListItems = `
            <li class="navButton"><a class="navLink" href="https://github.com/bferrel6">github</a></li>
            <li class="navButton"><a class="navLink" href="https://bferrel6.github.io">github.io</a></li>
            <li class="navButton"><a class="navLink" href="https://bferrel6.github.io/web115">WEB115.io </a></li>
            <li class="navButton"><a class="navLink" href="https://www.freecodecamp.org/bferrel6">freecodecamp </a></li>
            <li class="navButton"><a class="navLink" href="https://www.codecademy.com/profiles/bferrel6">codecademy</a></li>
            <li class="navButton"><a class="navLink" href="https://jsfiddle.net/user/bferrel6/fiddles/">jsfiddle</a></li>
            <li class="navButton"><a class="navLink" href="https://www.linkedin.com/in/benjamin-ferrell-7361301a6">LinkedIn</a></li>
        `
    navList.innerHTML = navListItems

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