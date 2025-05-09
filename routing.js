const routes = {
    "/": {
        path: "/html/home.html",
        script: "/js/main.js",
        cssStyle: "/css/style.css",
        title: "Home | My SPA",
        description: "Welcome to our homepage.",
    },
    "/contact": {
        path: "/html/contact.html",
        script: "/js/main.js",
        cssStyle: "/css/style.css",
        title: "Contact Us",
        description: "Welcome to our homepage.",
    },
    "/topic-details": {
        path: "/html/topic-details.html",
        script: "/js/main.js",
        cssStyle: "/css/style.css",
        title: "Topic Details",
        description: "Learn more about us.",
    },
    "/topics-listing": {
        path: "/html/topics-listing.html",
        script: "/js/main.js",
        cssStyle: "/css/style.css",
        title: "Topics Listing",
        description: "Learn more about us.",
    }
};

let app = document.getElementById("app");
async function loadPage(path) {
    console.log(path);
    let route = routes[path] || routes["/"];
    const html = await fetch(route.path).then(res => res.text());
    app.innerHTML = html;
    document.title = route.title;

    let metadesc = document.querySelector("meta[name='description']");
    if (!metadesc) {
        metadesc = document.createElement("meta");
        metadesc.name = "description";
        document.head.appendChild(metadesc);
    }
    metadesc.content = route.description;
    let cssLink = document.querySelector("link[rel='stylesheet']");
    if (!cssLink) {
        cssLink = document.createElement("link");
        cssLink.rel = "stylesheet";
        document.head.appendChild(cssLink);
    }
    cssLink.href = route.cssStyle;
}

function onNavClick(event) {
    if (event.target.matches("[data-link]")) {
        event.preventDefault();
        const path = event.target.getAttribute("href");
        history.pushState({}, "", path);
        loadPage(path);
    }
}

window.addEventListener("popstate", () => loadPage(location.pathname));
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", onNavClick);
    loadPage(location.pathname);
    let hash = window.location.hash;
    if (hash) {
        let retries = 30;
        let interval = setInterval(() => {
            let section = document.querySelector(hash);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" })
                clearInterval(interval);
            }
            if (--retries < 0) clearInterval(interval);
        }, 100);
    }
})
