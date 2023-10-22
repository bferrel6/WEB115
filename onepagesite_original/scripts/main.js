// Tutorial Link: https://itnext.io/build-a-single-page-web-app-javascript-and-the-dom-90c99b08f8a9

function getContent(fragmentId, callback) {

    // create custom content for each page of your website
    var pages = {
        home: "This is the Home page. Welcome to my site.",
        about: "This page will describe what my site is about.",
        contact: "Contact me on this page if you have any questions"
    };

    // look up what fragment you are searching for in the object
    callback(pages[fragmentId]);
}

function loadContent() {

    var contentDiv = document.getElementById("app");
    fragmentId = location.hash.slice(1);

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

