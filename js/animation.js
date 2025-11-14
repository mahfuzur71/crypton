// === GSAP Animation ===

// -------------------------------------
// Menu Section Animation
// -------------------------------------

gsap.from(".navbar", {
  y: -80,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
});

// Logo Animation start

gsap.to(".logo-icon", {
  rotateY: 180,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  transformOrigin: "center center",
});

// -------------------------------------
// Menu Button Animation
// -------------------------------------

const btnText = document.querySelector(".btn-text");

// Skew effect temporarily disable করে movement enable করা
gsap.set(btnText, { display: "inline-block", transformStyle: "preserve-3d" });

btnText.parentElement.addEventListener("mouseenter", () => {
  const tl = gsap.timeline();

  tl.to(btnText, {
    y: -50,
    opacity: 0,
    rotationX: 90,
    transformOrigin: "bottom center",
    duration: 0.2,
    ease: "power2.in",
    immediateRender: false,
  })
    .to(btnText, {
      y: 25,
      opacity: 0,
      rotationX: -90,
      duration: 0,
      immediateRender: false,
    })
    .to(btnText, {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 0.2,
      ease: "power2.out",
    });
});

// gsap.to(".comet-img", {
//   x: "120vw",
//   duration: 5,
//   ease: "none",
//   repeat: -1
// });

// -------------------------------------
// Banner Content Animation Start
// -------------------------------------

// GSAP + ScrollTrigger register
gsap.registerPlugin(ScrollTrigger);

// ------------------------------
// Banner Section Animation
// ------------------------------
let bannerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner-content",
    start: "top 80%", // element viewport e aslei start
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    // markers: true, // Debug korar jonno on korun
  },
});

// 1️⃣ Main Title (fade + slide from right)
bannerTl.from(".banner-title-main", {
  duration: 1,
  opacity: 0,
  x: 100,
  clipPath: "inset(0 100% 0 0)",
  ease: "power3.out",
  onStart: () => {
    gsap.set(".banner-title-main", {
      overflow: "hidden",
      display: "inline-block",
    });
  },
});

// 2️⃣ Gradient Titles (fade + staggered slide from right)
bannerTl.from(
  [".banner-title-gradient"],
  {
    duration: 1,
    opacity: 0,
    x: 100,
    stagger: 0.2,
    clipPath: "inset(0 100% 0 0)",
    ease: "power2.out",
  },
  "-=0.5" // previous animation shesh howar age start
);

// 3️⃣ Subtitle (slide up + fade)
bannerTl.from(
  ".banner-subtitle",
  {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.3)",
  },
  "-=0.3"
);

// 4️⃣ Paragraph (slide up + fade)
bannerTl.from(".banner-description", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
});

// -------------------------------------
// Banner Buttons Animation
// -------------------------------------

// Banner Button 1

const btn1 = document.querySelector(".banner-btn1");
const btnText1 = btn1.querySelector(".btn-text");
const btnIcon1 = btn1.querySelector(".fas");

// দুটো element কেই inline-block এবং 3D transform এ সেট করা
gsap.set([btnText1, btnIcon1], {
  display: "inline-block",
  transformStyle: "preserve-3d",
});

btn1.addEventListener("mouseenter", () => {
  const tl = gsap.timeline();

  tl.to([btnText1, btnIcon1], {
    y: -50,
    opacity: 0,
    rotationX: 90,
    transformOrigin: "bottom center",
    duration: 0.25,
    ease: "power2.in",
    immediateRender: false,
  })
    .set([btnText1, btnIcon1], {
      y: 25,
      opacity: 0,
      rotationX: -90,
      immediateRender: false,
    })
    .to([btnText1, btnIcon1], {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 0.25,
      ease: "power2.out",
    });
});

// Banner Button 2

const btn2 = document.querySelector(".banner-btn2");
const btnText2 = btn2.querySelector(".btn-text");
const btnIcon2 = btn2.querySelector(".fas");

// দুটো element কেই inline-block এবং 3D transform এ সেট করা
gsap.set([btnText2, btnIcon2], {
  display: "inline-block",
  transformStyle: "preserve-3d",
});

btn2.addEventListener("mouseenter", () => {
  const tl = gsap.timeline();

  tl.to([btnText2, btnIcon2], {
    y: -50,
    opacity: 0,
    rotationX: 90,
    transformOrigin: "bottom center",
    duration: 0.25,
    ease: "power2.in",
    immediateRender: false,
  })
    .set([btnText2, btnIcon2], {
      y: 25,
      opacity: 0,
      rotationX: -90,
      immediateRender: false,
    })
    .to([btnText2, btnIcon2], {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 0.25,
      ease: "power2.out",
    });
});

// -------------------------------------
// Banner Right Image Animation
// -------------------------------------

gsap.to(".banner-bitcoin", {
  scale: 1.1,
  duration: 2.5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

// Alternative: Stronger glow effect
gsap.fromTo(
  ".banner-img",
  {
    filter: "drop-shadow(0 0 15px rgba(48, 69, 198, 0.5)) brightness(0.5)",
  },
  {
    filter: "drop-shadow(0 0 100px rgba(48, 69, 198, 1)) brightness(1.2)", // 👈 Only 5% brightness increase
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  }
);

// -------------------------------------
// Market Trend Section Heading Animation Start
// -------------------------------------

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ------------------------------
// Market Trend Section Animation (No Layout Shift)
// ------------------------------
let marketTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".market-subtitle",
    start: "top 80%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

// smooth slide-in + fade animation (no clipPath)
marketTl
  .from(".market-subtitle", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power3.out",
  })
  .from(
    ".market-title",
    {
      duration: 1.2,
      opacity: 0,
      x: 100,
      clipPath: "inset(0 100% 0 0)",
      ease: "power3.out",
      onStart: () => {
        gsap.set(".buy-title", { overflow: "hidden", display: "inline-block" });
      },
    },
    "-=0.4" // overlap a bit
  )
  .from(
    ".market-title-line",
    {
      duration: 1,
      opacity: 0,
      x: 80,
      clipPath: "inset(0 100% 0 0)",
      ease: "power2.out",
    },
    "-=0.4"
  );

// -------------------------------------
// Market Trend Section Search Box Animation Start
// -------------------------------------

// Register GSAP (if not already)
gsap.registerPlugin(ScrollTrigger);

// Create a timeline for search box animation
let searchTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".search-container",
    start: "top 85%",
    toggleActions: "play none none reverse",
    // markers: true, // uncomment for debug
  },
});

// Animation sequence
searchTl
  // Step 1: Fade in + slide up
  .from(".search-box", {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: "power3.out",
  })
  // Step 2: Slight glowing border animation
  .to(".search-input", {
    boxShadow: "0 0 25px rgba(255, 210, 0, 0.4)",
    borderColor: "#ffd200",
    duration: 0.6,
    ease: "power1.inOut",
  })
  // Step 3: Glow fade out smoothly (for premium finish)
  .to(".search-input", {
    boxShadow: "0 0 0 rgba(255, 210, 0, 0)",
    borderColor: "#ffffff99",
    duration: 0.6,
    ease: "power1.inOut",
  });

const searchInput = document.querySelector(".search-input");

// 🔥 Common glow & normal properties
const glowEffect = {
  boxShadow: "0 0 30px rgba(255, 210, 0, 0.5)",
  borderColor: "#ffd200",
  duration: 0.4,
  ease: "power1.out",
};

const normalEffect = {
  boxShadow: "0 0 0 rgba(255, 210, 0, 0)",
  borderColor: "#ffffff99",
  duration: 0.4,
  ease: "power1.out",
};

// 🟡 Hover Start
searchInput.addEventListener("mouseenter", () => {
  gsap.to(searchInput, glowEffect);
});

// ⚪ Hover End
searchInput.addEventListener("mouseleave", () => {
  // Only reset if not focused
  if (document.activeElement !== searchInput) {
    gsap.to(searchInput, normalEffect);
  }
});

// 🔵 Focus Start
searchInput.addEventListener("focus", () => {
  gsap.to(searchInput, glowEffect);
});

// ⚫ Focus End
searchInput.addEventListener("blur", () => {
  gsap.to(searchInput, normalEffect);
});

// -------------------------------------
// Slider Section Image Animation Start
// -------------------------------------

gsap.registerPlugin(ScrollTrigger);

const sliderSection = document.querySelector(".image-slider-section");
const sliderTrack = sliderSection.querySelector(".slider-track");

// Duplicate slides for seamless loop
sliderTrack.innerHTML += sliderTrack.innerHTML;

// Force single-line layout
sliderTrack.style.display = "flex";
sliderTrack.style.flexWrap = "nowrap";
sliderTrack.style.gap = "60px";
sliderTrack.style.alignItems = "center";
sliderTrack.style.justifyContent = "flex-start";

// Add fade mask effect
const style = document.createElement("style");
style.textContent = `
  .slider-container {
    position: relative;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(
      90deg,
      transparent 0%,
      white 10%,
      white 90%,
      transparent 100%
    );
    mask-image: linear-gradient(
      90deg,
      transparent 0%,
      white 10%,
      white 90%,
      transparent 100%
    );
  }

  .slider-img {
    height: 47px;
    width: 227px;
    object-fit: contain;
    filter: drop-shadow(0 0 6px rgba(255,255,255,0.2));
  }
`;
document.head.appendChild(style);

// Calculate the total width of one full set
const totalWidth = sliderTrack.scrollWidth / 2;

// Create GSAP animation
const sliderAnim = gsap.to(sliderTrack, {
  x: `-=${totalWidth}`,
  duration: 25,
  ease: "none",
  repeat: -1,
  modifiers: {
    x: gsap.utils.unitize((x) => {
      const xNum = parseFloat(x);
      if (xNum <= -totalWidth) return 0;
      return xNum;
    }),
  },
});

// ScrollTrigger control
const trigger = ScrollTrigger.create({
  trigger: sliderSection,
  start: "top bottom",
  end: "bottom top",
  onEnter: () => sliderAnim.play(),
  onEnterBack: () => sliderAnim.play(),
  onLeave: () => sliderAnim.pause(),
  onLeaveBack: () => sliderAnim.pause(),
});

// ✅ Fix: Always start animation after reload
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
  sliderAnim.play(); // Force start
});

// ------------------------------
// Crypton Cards Section Heading Animation
// ------------------------------

let cryptonTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".crypton-title",
    start: "top 80%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

// Smooth slide-in + fade (same as market section)
cryptonTl
  .from(".crypton-title", {
    duration: 1.2,
    opacity: 0,
    x: 100,
    clipPath: "inset(0 100% 0 0)",
    ease: "power3.out",
    onStart: () => {
      gsap.set(".crypton-title", {
        overflow: "hidden",
        display: "inline-block",
      });
    },
  })
  .from(
    ".crypton-gradient",
    {
      duration: 1,
      opacity: 0,
      x: 80,
      clipPath: "inset(0 100% 0 0)",
      ease: "power2.out",
    },
    "-=0.4" // overlap with previous animation
  );

// ------------------------------
// Crypton Section Cards Animation
// ------------------------------

// ------------------------------
// Crypton Section Cards Animation
// ------------------------------

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const cryptonCards = gsap.utils.toArray(".crypton-card");

  cryptonCards.forEach((card) => {
    const iconImg = card.querySelector(".icon-img");
    const title = card.querySelector(".card-title");
    const text = card.querySelector(".card-text");
    const button = card.querySelector(".card-btn");

    // 🔹 Make sure cards visible initially
    gsap.set(card, { opacity: 1, y: 0 });
    gsap.set([title, text, button], { opacity: 1 });

    // 🟣 Scroll Animation (fade-in + lift)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
        once: true,
      },
    });

    tl.from(card, {
      opacity: 0,
      y: 60,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        title,
        {
          opacity: 0,
          x: 80,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        text,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

    // 🟡 Hover Animation for card
    const hoverAnim = gsap.to(card, {
      scale: 1.05,
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
      duration: 0.35,
      ease: "power2.out",
      paused: true,
    });

    // 🌀 Hover Rotation Animation for icon
    const iconRotate = gsap.to(iconImg, {
      rotateY: 360,
      duration: 1.2,
      ease: "power2.inOut",
      paused: true,
      transformOrigin: "center center",
      repeat: -1,
    });

    // 🔸 Hover Events
    card.addEventListener("mouseenter", () => {
      hoverAnim.play();
      iconRotate.play();
    });

    card.addEventListener("mouseleave", () => {
      hoverAnim.reverse();
      iconRotate.pause(0); // rotation theme giye abar start e jabe
    });
  });
});

// -------------------------------------
// Invest Section Heading Animation
// -------------------------------------

let investTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".invest-content",
    start: "top 80%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

// Title animation (same style)
investTl.from(".invest-title", {
  duration: 1.2,
  opacity: 0,
  x: 100,
  clipPath: "inset(0 100% 0 0)",
  ease: "power3.out",
  onStart: () => {
    gsap.set(".invest-title", { overflow: "hidden", display: "inline-block" });
  },
});

// Paragraphs fade-in one by one
investTl.from(
  ".invest-para",
  {
    duration: 0.9,
    opacity: 0,
    y: 40,
    stagger: 0.25,
    ease: "power2.out",
  },
  "-=0.4"
);

// Button fade-in + slight upward movement
investTl.from(
  ".get-started-link a",
  {
    duration: 0.8,
    opacity: 0,
    y: 30,
    ease: "power2.out",
  },
  "-=0.2"
);

// -------------------------------------
// Invest Section Coin Image Animation
// -------------------------------------

// === Main Bag bounce ===
gsap.to(".bag", {
  scale: 1.05,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

// === Small bag swing ===
gsap.to(".money-bag", {
  rotation: 5,
  transformOrigin: "bottom center",
  duration: 2.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

// === Cash floating ===
gsap.to(".cash", {
  y: -15,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

// === Coins floating + rotation ===
gsap.to(".coin", {
  y: -20,
  rotation: 360,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  stagger: 0.2,
});

// === Stars glowing ===
gsap.fromTo(
  ".star",
  { opacity: 0.4, scale: 0.8 },
  {
    opacity: 1,
    scale: 1.2,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.3,
  }
);

// -------------------------------------
// Crypton Mining Section Heading Animation
// -------------------------------------

let miningTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".mining-content",
    start: "top 80%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

// Title animation (same style)
miningTl.from(".mining-title", {
  duration: 1.2,
  opacity: 0,
  x: 100,
  clipPath: "inset(0 100% 0 0)",
  ease: "power3.out",
  onStart: () => {
    gsap.set(".mining-title", { overflow: "hidden", display: "inline-block" });
  },
});

// Paragraphs fade-in one by one
miningTl.from(
  ".mining-para",
  {
    duration: 0.9,
    opacity: 0,
    y: 40,
    stagger: 0.25,
    ease: "power2.out",
  },
  "-=0.4"
);

// Button fade-in + slight upward movement
miningTl.from(
  ".get-started-mining a",
  {
    duration: 0.8,
    opacity: 0,
    y: 30,
    ease: "power2.out",
  },
  "-=0.2"
);

// -------------------------------------
// Crypton Miner Section Image Animation
// -------------------------------------

// 1️⃣ Gear alternate rotation (right then left)
gsap.to(".gear1", {
  rotate: 360,
  duration: 4,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
  transformOrigin: "center center",
});

// 2️⃣ Left Pickaxe swing
gsap.to(".left-axe", {
  rotate: 5,
  duration: 0.6,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut",
  transformOrigin: "bottom right",
});

// 3️⃣ Right Pickaxe swing (same timing)
gsap.to(".right-axe", {
  rotate: -5,
  duration: 0.6,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut",
  transformOrigin: "bottom left",
});

// 4️⃣ Bitcoin Bag Pulse (Scale up-down)
gsap.to(".bag1", {
  scale: 1.1,
  duration: 1.2,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut",
  transformOrigin: "center center",
});

// -------------------------------------
// Get Started Section Heading Animation
// -------------------------------------

let miniTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".mini-content",
    start: "top 80%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

// Title animation (same smooth slide)
miniTl.from(".mini-title", {
  duration: 1.2,
  opacity: 0,
  x: 100,
  clipPath: "inset(0 100% 0 0)",
  ease: "power3.out",
  onStart: () => {
    gsap.set(".mini-title", { overflow: "hidden", display: "inline-block" });
  },
});

// Paragraph fade-in from bottom
miniTl.from(
  ".mini-para",
  {
    duration: 0.9,
    opacity: 0,
    y: 40,
    ease: "power2.out",
  },
  "-=0.4" // heading shesh howar aage light overlap
);

// -------------------------------------
// Get Started Section Button Animation
// -------------------------------------

const btn3 = document.querySelector(".mini-btn");
const btnText3 = btn3.querySelector(".btn-text");
const btnIcon3 = btn3.querySelector("i"); // <-- correct icon selection

// শুধু transform style set korchi
gsap.set([btnText3, btnIcon3], {
  display: "inline-block",
  transformStyle: "preserve-3d",
});

btn3.addEventListener("mouseenter", () => {
  const tl = gsap.timeline();

  tl.to([btnText3, btnIcon3], {
    y: -50,
    opacity: 0,
    rotationX: 90,
    transformOrigin: "bottom center",
    duration: 0.25,
    ease: "power2.in",
  })
    .set([btnText3, btnIcon3], {
      y: 25,
      opacity: 0,
      rotationX: -90,
    })
    .to([btnText3, btnIcon3], {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 0.25,
      ease: "power2.out",
    });
});

// -------------------------------------
// Get Started Section Cards Animation
// -------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const stepCards = gsap.utils.toArray(".step-card");

  // Set initial hidden states (fix first load flash issue)
  gsap.set(stepCards, { opacity: 0, y: 60 });

  stepCards.forEach((card) => {
    const title = card.querySelector(".step-title");
    const text = card.querySelector(".step-text");

    gsap.set(title, { opacity: 0, x: 80 });
    gsap.set(text, { opacity: 0, y: 25 });

    // Scroll Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      .to(
        title,
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .to(
        text,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

    // Hover Animation stays same
    const hoverAnim = gsap.to(card, {
      scale: 1.05,
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
      duration: 0.35,
      ease: "power2.out",
      paused: true,
    });

    card.addEventListener("mouseenter", () => hoverAnim.play());
    card.addEventListener("mouseleave", () => hoverAnim.reverse());
  });
});

// -------------------------------------
// Pro Mining Section Heading Animation
// -------------------------------------

let proMiningTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".pro-miner-content",
    start: "top 80%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

// Title animation (same style)
proMiningTl.from(".pro-miner-title", {
  duration: 1.2,
  opacity: 0,
  x: 100,
  clipPath: "inset(0 100% 0 0)",
  ease: "power3.out",
  onStart: () => {
    gsap.set(".pro-miner-title", {
      overflow: "hidden",
      display: "inline-block",
    });
  },
});

// Paragraphs fade-in one by one
proMiningTl.from(
  ".pro-miner-para",
  {
    duration: 0.9,
    opacity: 0,
    y: 40,
    stagger: 0.25,
    ease: "power2.out",
  },
  "-=0.4"
);

// Button fade-in + slight upward movement
proMiningTl.from(
  ".get-started-pro a",
  {
    duration: 0.8,
    opacity: 0,
    y: 30,
    ease: "power2.out",
  },
  "-=0.2"
);

// -------------------------------------
// Pro Miner Section Image Animation
// -------------------------------------

gsap.registerPlugin(ScrollTrigger);

// Initial visibility hidden for scroll animations
gsap.set(
  [
    ".laptop-base",
    ".central-bitcoin",
    ".flying-coin",
    ".key-icon",
    ".percentage-icon",
    ".buy-btn",
    ".sell-btn",
  ],
  { autoAlpha: 0 }
);

// Master timeline for all animations triggered on scroll
const minerTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".pro-miner-image",
    start: "top 80%", // starts when section enters viewport
    toggleActions: "play none none none",
  },
});

// ✅ Laptop Fade-in + Scale-up
minerTimeline.fromTo(
  ".laptop-base",
  { autoAlpha: 0, scale: 0.8 },
  {
    autoAlpha: 1,
    scale: 1,
    duration: 1.2,
    ease: "back.out(1.7)",
    clearProps: "transform", // ✅ after animation, reset GSAP transform
  }
);

// 💰 Central Bitcoin Pulse + Rotate
minerTimeline.to(
  ".central-bitcoin",
  {
    autoAlpha: 1,
    scale: 1.1,
    rotate: 360,
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "sine.inOut",
    transformOrigin: "center center",
  },
  "-=0.5"
);

// 🪙 Flying Coins Drop + Rotate
minerTimeline.fromTo(
  ".flying-coin",
  { y: -100, autoAlpha: 0, rotate: 0 },
  {
    y: 0,
    autoAlpha: 1,
    rotate: 360,
    stagger: 0.2,
    duration: 1.2,
    ease: "bounce.out",
  },
  "-=0.8"
);

// 🔑 Key Slide-in (Right)
minerTimeline.fromTo(
  ".key-icon",
  { x: 80, autoAlpha: 0 },
  { x: 0, autoAlpha: 1, duration: 1, ease: "power2.out" },
  "-=0.6"
);

// 💹 Percentage Slide-in (Left)
minerTimeline.fromTo(
  ".percentage-icon",
  { x: -80, autoAlpha: 0 },
  { x: 0, autoAlpha: 1, duration: 1, ease: "power2.out" },
  "-=0.6"
);

// 🟢 Buy / Sell Buttons Pop-in (with corrected size)
minerTimeline.fromTo(
  [".buy-btn", ".sell-btn"],
  { autoAlpha: 0, scale: 0.3 },
  { autoAlpha: 1, scale: 1, duration: 0.8, ease: "back.out(2)", stagger: 0.2 },
  "-=0.5"
);

// Hammer realistic hit animation
gsap
  .timeline({ repeat: -1, yoyo: false })
  // Step 1: পিছনে টান
  .to(".hammer", {
    rotate: -40,
    duration: 0.4,
    ease: "power1.inOut",
    transformOrigin: "bottom center",
  })
  // Step 2: সামনে ও নিচে কপ মারা
  .to(".hammer", {
    rotate: 60,
    y: 10, // সামান্য নিচে নামবে
    duration: 0.2,
    ease: "power2.in",
    transformOrigin: "bottom center",
  })
  // Step 3: আবার আগের অবস্থানে ফিরে যাবে
  .to(".hammer", {
    rotate: 0,
    y: 0,
    duration: 0.3,
    ease: "power2.out",
    transformOrigin: "bottom center",
  });

// ⚙️ Continuous Gear Rotation
gsap.to(".gear", {
  rotate: 360,
  duration: 6,
  repeat: -1,
  ease: "linear",
  transformOrigin: "center center",
});

// 📈 Arrows Floating Motion
gsap.to(".arrow", {
  y: 10,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  stagger: 0.4,
});

// 🔷 Lines Subtle Glow
gsap.to(".line", {
  opacity: 1,
  duration: 1.5,
  ease: "power1.inOut",
});

// -------------------------------------
// Invest Crypton Section Heading Animation
// -------------------------------------

let investCryptonTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".invest-crypton-content",
    start: "top 80%",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});

// Title animation (same style)
investCryptonTl.from(".invest-crypton-title", {
  duration: 1.2,
  opacity: 0,
  x: 100,
  clipPath: "inset(0 100% 0 0)",
  ease: "power3.out",
  onStart: () => {
    gsap.set(".invest-crypton-title", {
      overflow: "hidden",
      display: "inline-block",
    });
  },
});

// Paragraphs fade-in one by one
investCryptonTl.from(
  ".invest-crypton-para",
  {
    duration: 0.9,
    opacity: 0,
    y: 40,
    stagger: 0.25,
    ease: "power2.out",
  },
  "-=0.4"
);

// -------------------------------------
// Invest Crypton Buttons Animation
// -------------------------------------

const btn4 = document.querySelector(".invest-crypton-btn");
const btnText4 = btn4.querySelector(".btn-text");
const btnIcon4 = btn4.querySelector(".fas");

// দুটো element কেই inline-block এবং 3D transform এ সেট করা
gsap.set([btnText4, btnIcon4], {
  display: "inline-block",
  transformStyle: "preserve-3d",
});

btn4.addEventListener("mouseenter", () => {
  const tl = gsap.timeline();

  tl.to([btnText4, btnIcon4], {
    y: -50,
    opacity: 0,
    rotationX: 90,
    transformOrigin: "bottom center",
    duration: 0.25,
    ease: "power2.in",
    immediateRender: false,
  })
    .set([btnText4, btnIcon4], {
      y: 25,
      opacity: 0,
      rotationX: -90,
      immediateRender: false,
    })
    .to([btnText4, btnIcon4], {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 0.25,
      ease: "power2.out",
    });
});

// -------------------------------------
// Footer Logo Animation
// -------------------------------------

gsap.to(".footer-icon", {
  rotateY: 180,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  transformOrigin: "center center",
});
