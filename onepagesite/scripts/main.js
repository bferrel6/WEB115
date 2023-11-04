function getContent(fragmentId, callback) {

    // create custom content for each page of your website
    var pages = {
        home: "This is the Home page. Welcome to my site.",
        intro: "This is my Introduction page, if you would like to learn more about me.",
        contract: "This is my Course Contract page for WEB115, Web Markup and Scripting.",
        brand: "This page will define my Brand, a line of space caravans called Veloniti.",
        contact: "Contact me on this page if you have any questions"
    };

    // look up what fragment you are searching for in the object
    callback(pages[fragmentId]);
}

function loadContent() {

    var contentDiv = document.getElementById("app");
    fragmentId = location.hash.slice(1); // remove the # from the location hash to match the page name
    
    getContent(fragmentId, function(content) {
        contentDiv.innerHTML = content;
    });
}

if(!location.hash) {
    location.hash = "#home";
}

loadContent();

// this will listen for the fragment identifier change
window.addEventListener("hashchange", loadContent)

// Tutorial Link: https://itnext.io/build-a-single-page-web-app-javascript-and-the-dom-90c99b08f8a9