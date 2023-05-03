const cards = document.querySelectorAll(".slide");

cards.forEach((slide) => {
    const buttonSection = slide.querySelector(".product-detail-btn");

    slide.addEventListener("mouseover", () => {
        buttonSection.style.transition = "0.5s ease";
        buttonSection.style.transform = "translate( 5px, 0px)";
        buttonSection.style.visibility = "visible";
    });

    slide.addEventListener("mouseout", () => {
        buttonSection.style.transition = "0s ease";
        buttonSection.style.transform = "translate( -5px, 0px)";
        buttonSection.style.visibility = "hidden";
    });
});
