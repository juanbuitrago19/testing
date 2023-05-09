const cards1 = document.querySelectorAll(".product--card");
const cards2 = document.querySelectorAll(".product--card--grid");

cards1.forEach((slide) => {
    const buttonSection = slide.querySelector(".product-detail-btn");

    slide.addEventListener("mouseover", () => {
        buttonSection.style.transition = "0.5s ease";
        buttonSection.style.transform = "translate( 0px, 0px)";
        buttonSection.style.visibility = "visible";
    });

    slide.addEventListener("mouseout", () => {
        buttonSection.style.transition = "0s ease";
        buttonSection.style.transform = "translate( -10px, 0px)";
        buttonSection.style.visibility = "hidden";
    });
});

cards2.forEach((slide) => {
    const buttonSection = slide.querySelector(".product-detail-btn");

    slide.addEventListener("mouseover", () => {
        buttonSection.style.transition = "0.5s ease";
        buttonSection.style.transform = "translate( 0px, 0px)";
        buttonSection.style.visibility = "visible";
    });

    slide.addEventListener("mouseout", () => {
        buttonSection.style.transition = "0s ease";
        buttonSection.style.transform = "translate( -10px, 0px)";
        buttonSection.style.visibility = "hidden";
    });
});

