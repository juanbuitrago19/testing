const textTicker = $(".wr-4");
const textTickerInfo = $(textTicker).find(".text-ticker-info");
const textTickerContent = $(textTickerInfo).html();
const textTickerWidth = textTickerInfo.width();

function initTextTicker() {
    const textTickerSpeed = (textTickerWidth / $(textTicker).width()) * 5;

    $(textTickerInfo).html(textTickerContent + textTickerContent);

    gsap.to(textTickerInfo, {
        duration: textTickerSpeed,
        x: "-" + textTickerWidth + "px",
        repeat: -1,
        ease: Linear.easeNone,
        startAt: { x: 100 },
    });
}

$(window).on("load resize", function () {
    initTextTicker();
});
