import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/style.css'

let timelineSection = document.querySelector(".timeline-section")
let timelineItems = document.querySelectorAll(".vertical-scrollable-timeline li");
console.log(timelineItems);
window.onscroll = function () {
    if (window.scrollY > 10) document.querySelector(".sticky-wrapper").classList.add("is-sticky");
    else document.querySelector(".sticky-wrapper").classList.remove("is-sticky");

    // if (window.scrollY >= timelineSection.offsetTop - 200) {

    //     timelineItems[0].classList.add("active");
    //     if (window.scrollY >= timelineSection.offsetTop + 150) {
    //         timelineItems[1].classList.add("active");
    //     } else timelineItems[1].classList.remove("active");
    //     if (window.scrollY >= timelineSection.offsetTop + 450) {
    //         timelineItems[2].classList.add("active");
    //     } else timelineItems[2].classList.remove("active");
    // } else {
    //     timelineItems[0].classList.remove("active");
    // }
    timelineItems.forEach(item => {
        let itemOffsetTop = item.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY >= itemOffsetTop - 300) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

function activeTimelineItems() {

}
