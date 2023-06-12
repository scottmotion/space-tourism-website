const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navAccent = document.querySelector(".primary-nav-accent");


navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");

    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})


// function reportNavAccentSize() {
//     navAccentWidth = parseInt(window.getComputedStyle(navAccent).getPropertyValue("width"));
//     if (navAccentWidth <= 50) {
//     console.log(navAccentWidth);
//     navAccent.style["visibility"] = "hidden";
//     }
//     if (navAccentWidth > 50) {
//         console.log(navAccentWidth);
//         navAccent.style["visibility"] = "visible";
//     }
// }


// window.onresize = reportNavAccentSize;