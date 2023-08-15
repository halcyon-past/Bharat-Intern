var r = document.querySelector(":root");
const darkModeToggle = document.querySelector(".dark-mode-toggle");
const avatarElement = document.querySelector(".avatar");
const education = document.querySelector(".education");
const experience = document.querySelector(".experience");
const frontend = document.querySelector(".frontend");
const backend = document.querySelector(".backend");
const services = document.querySelector(".services");
const languages = document.querySelector(".languages");
const skills = document.querySelector(".skills");
const cards = document.querySelectorAll(".card");
const text = document.querySelectorAll(".text");
const email = document.querySelector(".email");
const message = document.querySelector(".message");

gsap.registerPlugin(ScrollTrigger);

let darkState = true;
let trigger = true;
const darkSVG = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>`;
const lightSVG = `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

function setDark() {
  r.style.setProperty("--primary-color", "#1e94c2");
  r.style.setProperty("--secondary-color", "#120316");
  r.style.setProperty("--background-color", "#040d02");
  r.style.setProperty("--text-color", "#fbfefb");
  r.style.setProperty("--accent-color", "#c74e1f");
}

function setLight() {
  r.style.setProperty("--primary-color", "#b806fe");
  r.style.setProperty("--secondary-color", "#b3ffe9");
  r.style.setProperty("--background-color", "#fafffe");
  r.style.setProperty("--text-color", "#002e21");
  r.style.setProperty("--accent-color", "#96340d");
}

function toggleDarkMode() {
  darkState = !darkState;
  if (darkState) {
    setDark();
    darkModeToggle.innerHTML = lightSVG;
  } else {
    setLight();
    darkModeToggle.innerHTML = darkSVG;
  }
}

document.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    trigger = true;
  } else {
    trigger = false;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (trigger && window.innerWidth > 768) {
    gsap.from(education, {
      x: "-200%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: education,
        start: "top 100%",
        end: "center 70%",
        scrub: true,
      },
    });

    gsap.from(experience, {
      x: "-200%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: experience,
        start: "top 100%",
        end: "center 70%",
        scrub: true,
      },
    });

    gsap.from(frontend, {
      x: "200%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: frontend,
        start: "top 100%",
        end: "center 70%",
        scrub: true,
      },
    });

    gsap.from(backend, {
      x: "200%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: backend,
        start: "top 100%",
        end: "center 70%",
        scrub: true,
      },
    });

    gsap.from(services, {
      x: "200%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: services,
        start: "top 100%",
        end: "center 70%",
        scrub: true,
      },
    });

    gsap.from(languages, {
      x: "200%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: languages,
        start: "top 100%",
        end: "center 90%",
        scrub: true,
      },
    });

    gsap.from(skills, {
      x: "200%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: skills,
        start: "top 100%",
        end: "center 70%",
        scrub: true,
      },
    });

    gsap.from(cards, {
      y: "100%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cards,
        start: "top 100%",
        end: "center 70%",
        scrub: true,
      },
    });

    gsap.from(avatarElement, {
      opacity: 0,
      duration: 1,
      y: 50,
      x: 50,
      ease: "power2.out",
    });

    gsap.from(text, {
      x: "-200%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: text,
        start: "top 100%",
        end: "center 70%",
        scrub: true,
      },
    });

    gsap.from(email, {
      x: "-200%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: email,
        start: "top 100%",
        end: "center 70%",
        scrub: true,
      },
    });

    gsap.from(message, {
      x: "-200%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: message,
        start: "top 100%",
        end: "center 70%",
        scrub: true,
      },
    });
  }
});

new TypeIt("#typer", {
  lifeLike: false,
  speed: 0,
  loop: true,
})
  .delete(1)
  .type("P")
  .pause(428)
  .type("r")
  .pause(196)
  .type("o")
  .pause(256)
  .type("g")
  .pause(157)
  .type("r")
  .pause(93)
  .type("a")
  .pause(275)
  .type("m")
  .pause(101)
  .type("m")
  .pause(94)
  .type("e")
  .pause(193)
  .type("r")
  .pause(707)
  .delete(1)
  .pause(519)
  .delete(1)
  .pause(34)
  .delete(1)
  .pause(31)
  .delete(1)
  .pause(32)
  .delete(1)
  .pause(36)
  .delete(1)
  .pause(32)
  .delete(1)
  .pause(35)
  .delete(1)
  .pause(31)
  .delete(1)
  .pause(33)
  .delete(1)
  .pause(541)
  .type("F")
  .pause(282)
  .type("u")
  .pause(225)
  .type("l")
  .pause(142)
  .type("l")
  .pause(237)
  .type(" ")
  .pause(139)
  .type("S")
  .pause(145)
  .type("t")
  .pause(117)
  .type("a")
  .pause(91)
  .type("c")
  .pause(219)
  .type("k")
  .pause(164)
  .type(" ")
  .pause(392)
  .type("W")
  .pause(213)
  .type("e")
  .pause(140)
  .type("b")
  .pause(166)
  .type(" ")
  .pause(190)
  .type("D")
  .pause(190)
  .type("e")
  .pause(149)
  .type("v")
  .pause(58)
  .type("e")
  .pause(224)
  .type("l")
  .pause(177)
  .type("o")
  .pause(155)
  .type("p")
  .pause(112)
  .type("e")
  .pause(195)
  .type("r")
  .pause(861)
  .delete(1)
  .pause(517)
  .delete(1)
  .pause(34)
  .delete(1)
  .pause(32)
  .delete(1)
  .pause(34)
  .delete(1)
  .pause(33)
  .delete(1)
  .pause(37)
  .delete(1)
  .pause(30)
  .delete(1)
  .pause(33)
  .delete(1)
  .pause(34)
  .delete(1)
  .pause(31)
  .delete(1)
  .pause(34)
  .delete(1)
  .pause(34)
  .delete(1)
  .pause(32)
  .delete(1)
  .pause(33)
  .delete(1)
  .pause(34)
  .delete(1)
  .pause(33)
  .delete(1)
  .pause(34)
  .delete(1)
  .pause(33)
  .delete(1)
  .pause(34)
  .delete(1)
  .pause(32)
  .delete(1)
  .pause(32)
  .delete(1)
  .pause(33)
  .delete(1)
  .pause(33)
  .delete(1)
  .pause(1013)
  .type("B")
  .pause(196)
  .type("e")
  .pause(243)
  .type("a")
  .pause(119)
  .type("t")
  .pause(199)
  .type("b")
  .pause(202)
  .type("o")
  .pause(115)
  .type("x")
  .pause(209)
  .type("e")
  .pause(244)
  .type("r")
  .pause(1312)
  .delete(1)
  .pause(518)
  .delete(1)
  .pause(35)
  .delete(1)
  .pause(32)
  .delete(1)
  .pause(33)
  .delete(1)
  .pause(35)
  .delete(1)
  .pause(33)
  .delete(1)
  .pause(32)
  .delete(1)
  .pause(34)
  .delete(1)
  .pause(405)
  .pause(96)
  .type(" ")
  .pause(198)
  .type("m")
  .pause(173)
  .type("u")
  .pause(118)
  .type("c")
  .pause(147)
  .type("h")
  .pause(213)
  .type(" ")
  .pause(194)
  .type("m")
  .pause(163)
  .type("o")
  .pause(82)
  .type("r")
  .pause(204)
  .type("e")
  .pause(271)
  .type(".")
  .pause(198)
  .type(".")
  .pause(141)
  .type(".")
  .pause(210)
  .type(".")
  .pause(264)
  .type(".")
  .pause(1034)
  .delete(1)
  .pause(520)
  .delete(1)
  .pause(34)
  .delete(1)
  .pause(35)
  .delete(1)
  .pause(34)
  .delete(1)
  .pause(34)
  .delete(1)
  .pause(30)
  .delete(1)
  .pause(32)
  .delete(1)
  .pause(37)
  .delete(1)
  .pause(29)
  .delete(1)
  .pause(36)
  .delete(1)
  .pause(30)
  .delete(1)
  .pause(36)
  .delete(1)
  .pause(31)
  .delete(1)
  .go();
