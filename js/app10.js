let headerSticky = document.querySelector(".header-sticky");

let intro3 = document.querySelector(".intro-3");

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        headerSticky.style.position = "static";

        intro3.style.position = "sticky";
    }
});
