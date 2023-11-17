// generate navigation bar using 3 arguments
function navBar(nav, linkNames, linkHREFs) {
    for (let i = 0; i < linkNames.length; i++) {
        let link = document.createElement("a")
        link.innerHTML = linkNames[i]
        link.href = linkHREFs[i]
        nav.append(link)
    }
};

// one page site version of header

function addHeaderOPS() {
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
    logoLink.href = "#home";
    logoLink.classList.add("logo");
    const logo = new Image();
    logo.src = "images/v_nav_logo.png";
    logoLink.appendChild(logo);
    nav.appendChild(logoLink);

    // add navigation links
    const navLinkNames = [
        "introduction",
        "contract",
        "brand",
        "contact"
    ];

    const navLinkHREFs = [
        "#intro",
        "#contract",
        "#brand",
        "#contact"
    ];

    navBar(nav, navLinkNames, navLinkHREFs);
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
    const navLinkNames = [
        "GitHub",
        "GitHub.io",
        "WEB115.io",
        "freeCodeCamp",
        "Codecademy",
        "JSFiddle",
        "LinkedIn"
    ];

    const navLinkHREFs = [
        "https://github.com/bferrel6",
        "https://bferrel6.github.io",
        "https://bferrel6.github.io/web115",
        "https://www.freecodecamp.org/bferrel6",
        "https://www.codecademy.com/profiles/bferrel6",
        "https://jsfiddle.net/user/bferrel6/fiddles/",
        "https://www.linkedin.com/in/benjamin-ferrell-7361301a6"
    ];
    
    navBar(nav, navLinkNames, navLinkHREFs);

    // add signature
    const sigContent = `Designed by <strong>&copy;Mithril WebForge</strong> - <em>Renowned Across the Multiverse</em>`;
    const signature = document.createElement("p");
    signature.innerHTML = sigContent;
    footer.append(signature);

    // add validation block
    const validationLinks = `
            <a href="http://validator.w3.org/check?uri=referer" id="validation_link_html">Validate HTML</a>
            <a href="http://jigsaw.w3.org/css-validator/check/referer" id="validation_link_css">Validate CSS</a>
        `;
    const validationBlock = document.createElement("div");
    validationBlock.classList.add("validate");
    validationBlock.innerHTML = validationLinks;
    footer.append(validationBlock);

    // update validation links based on the current page
    document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
    document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
}

window.onload = 
    addHeaderOPS();
    addFooter();