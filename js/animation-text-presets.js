import { gsap } from "gsap";


gsap.registerPlugin(SplitText, ScrollTrigger);

let mySplitText = new SplitText(".split", { type: "chars" });
let chars = mySplitText.chars;

gsap.from(chars, {
    yPercent: 130,
    stagger: 0.05,
    ease: "back.out",
    duration: 1,
    ScrollTrigger: {
        trigger: '.split',
        start: "top 50%",
        markers: true
    }
});
