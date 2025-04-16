import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/style.css'

window.addEventListener("scroll", event => {
    console.log(window.scrollY)
    console.log(window.scrollX)
    if (scrollY >10) {
        document.querySelector(".sticky-wrapper").classList.add("is-sticky")
    } else {
        document.querySelector(".sticky-wrapper").classList.remove("is-sticky")
    }
})
