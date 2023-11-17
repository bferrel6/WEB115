// generate navigation bar using 3 arguments
function navBar(nav, linkNames, linkHREFs) {
    for (let i = 0; i < linkNames.length; i++) {
        let link = document.createElement("a");
        link.innerHTML = linkNames[i];
        link.href = linkHREFs[i];
        nav.append(link);
    }
}

function addHeader() {
    // create header element at top of body
    const header = document.createElement("header");
    document.body.prepend(header);

    // add name and course heading
    const h1 = document.createElement("h1");
    const name = "Ben Ferrell";
    const mascot = "Boost Falcon";
    const course = "WEB115";
    h1.innerHTML = `${name}'s ${mascot} | ${course}`;
    header.append(h1);

    // add banner with slogan
    const sloganBanner = document.createElement("h3");
    sloganBanner.innerHTML = "<em>Sail the Stars in Style</em>";
    header.append(sloganBanner);

    // add nav container
    const nav = document.createElement("nav");
    header.append(nav);

    // add first link as a logo
    const logoLink = document.createElement("a");
    logoLink.href = "index.html";
    logoLink.classList.add("logo");
    const logo = new Image();
    logo.src = "images/v_nav_logo.png";
    logoLink.appendChild(logo);
    nav.appendChild(logoLink);

    // add navigation links

    /*
    fetch('scripts/navLinks.json', {method: 'GET'})
        .then(res => res.json())
        .then(obj => {console.log(obj.headerLinks);});
    
    linkSet = JSON.parse(obj);
    console.log(linkSet);
    */

    const navLinks = {
        names: [
        "introduction",
        "contract",
        "brand",
        "code play",
        "fizzbuzz",
        "one page site"
        ],
        hrefs: [
        "introduction.html",
        "contract.html",
        "brand.html",
        "ccp.html",
        "fizzbuzz4.html",
        "onepagesite/index.html"
        ]
    }

    navBar(nav, navLinks.names, navLinks.hrefs);

    // add hr line on non-fizzbuzz pages
    if (!(document.getElementById("buzz"))) {
        const line = document.createElement("hr");
        header.append(line);
    }
}

function addSubHead() {
    // add subheader at top of main only to fizzbuzz pages
    if (document.getElementById("buzz")) { 
        const main = document.getElementById("buzz")
        
        // add hr line
        const line = document.createElement("hr");
        main.prepend(line);

        // add nav container
        const nav = document.createElement("nav")
        main.prepend(nav)

        // add navigation links

        const navLinks = {
            names: [
                "fizzbuzz 0",
                "fizzbuzz 1",
                "fizzbuzz 2",
                "fizzbuzz 3",
                "fizzbuzz 4"
            ],
            hrefs: [
                "fizzbuzz0.html",
                "fizzbuzz1.html",
                "fizzbuzz2.html",
                "fizzbuzz3.html",
                "fizzbuzz4.html"
            ]
        }

        navBar(nav, navLinks.names, navLinks.hrefs);
    }
}

function addFooter() {
    // create footer element at end of body
    const footer = document.createElement("footer");
    document.body.append(footer);

    // add hr line
    const line = document.createElement("hr");
    footer.append(line);

    // add nav container
    const nav = document.createElement("nav");
    footer.append(nav);

    // add navigation links
    const navLinks = {
        names: [
            "GitHub",
            "GitHub.io",
            "WEB115.io",
            "freeCodeCamp",
            "Codecademy",
            "JSFiddle",
            "LinkedIn"
        ],
        hrefs: [
            "https://github.com/bferrel6",
            "https://bferrel6.github.io",
            "https://bferrel6.github.io/web115",
            "https://www.freecodecamp.org/bferrel6",
            "https://www.codecademy.com/profiles/bferrel6",
            "https://jsfiddle.net/user/bferrel6/fiddles/",
            "https://www.linkedin.com/in/benjamin-ferrell-7361301a6"
        ]
    }

    navBar(nav, navLinks.names, navLinks.hrefs);

    // add signature
    const sigContent = `Designed by <strong>&copy;Mithril WebForge</strong> - <em>Renowned Across the Multiverse</em>`;
    const signature = document.createElement("p");
    signature.innerHTML = sigContent;
    footer.append(signature);

    // add validation block
    const validationLinks = {
        names: [
            "Validate HTML",
            "Validate CSS"
        ],
        hrefs: [
            "http://validator.w3.org/check?uri=referer",
            "http://jigsaw.w3.org/css-validator/check/referer"
        ],
        ids: [
            "validation_link_html",
            "validation_link_css"
        ]
    }

    const validationBlock = document.createElement("div");
    validationBlock.classList.add("validate");
    footer.append(validationBlock);

    for (let i = 0; i < validationLinks.names.length; i++) {
        let link = document.createElement("a");
        link.innerHTML = validationLinks.names[i];
        link.href = validationLinks.hrefs[i];
        link.setAttribute("id", validationLinks.ids[i]);
        validationBlock.append(link);
    }

    // update validation links based on the current page
    document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
    document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
}

window.onload = 
    addHeader();
    addSubHead(); 
    addFooter();