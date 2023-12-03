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

    fetch('scripts/navLinks.json')
        .then(res => {return res.json()})
        .then(data => {
            const headerLinks = data.headerLinks
            navBar(nav, headerLinks.names, headerLinks.hrefs);
        })
        .catch(error => console.log(error))  

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
        fetch('scripts/navLinks.json')
        .then(res => {return res.json()})
        .then(data => {
            const subHeaderFBLinks = data.subHeaderFBLinks
            navBar(nav, subHeaderFBLinks.names, subHeaderFBLinks.hrefs);
        })
        .catch(error => console.log(error))
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
    fetch('scripts/navLinks.json')
        .then(res => {return res.json()})
        .then(data => {
            const footerLinks = data.footerLinks
            navBar(nav, footerLinks.names, footerLinks.hrefs);
        })
        .catch(error => console.log(error))  

    // add signature
    const sigContent = `Designed by <strong>&copy;Mithril WebForge</strong> - <em>Renowned Across the Multiverse</em>`;
    const signature = document.createElement("p");
    signature.innerHTML = sigContent;
    footer.append(signature);

    // add validation block
    const validationBlock = document.createElement("div");
    validationBlock.classList.add("validate");
    footer.append(validationBlock);
    
    fetch('scripts/navLinks.json')
        .then(res => {return res.json()})
        .then(data => {
            const validationLinks = data.validationLinks
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
        })
        .catch(error => console.log(error))
}

window.onload = 
    addHeader();
    addSubHead(); 
    addFooter();