import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/style.css'

let timelineItems = document.querySelectorAll(".vertical-scrollable-timeline li");
let allTargetSections = document.querySelectorAll(".target-section");
let navLinks = document.querySelectorAll(".nav-link");


window.onscroll = function () {
    if (window.scrollY > 10) document.querySelector(".sticky-wrapper").classList.add("is-sticky");
    else {
        navLinks.forEach((ele) => {
            ele.classList.remove("active");
        })
        navLinks[0].classList.add("active");
        document.querySelector(".sticky-wrapper").classList.remove("is-sticky");
    }

    timelineItems.forEach(item => {
        let itemOffsetTop = item.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY >= itemOffsetTop - 300) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    allTargetSections.forEach((ele, index) => {
        let offset = ele.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY >= offset - 200) {
            navLinks.forEach((ele) => {
                ele.classList.remove("active");
            })
            navLinks[index + 1].classList.add("active");
        }
    })
}

