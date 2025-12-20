const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", closeMenu);
});

function closeMenu(){
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
}
AOS.init({
    duration: 1200,
    once: true
});

const typingText = document.getElementById("typing");

const words = [
    "a Student",
    "a Problem Solver",
    "a Tech Enthusiast",
    "a Aspiring Developer",
    " a Lifelong Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, 1200); // pause after typing
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    const speed = isDeleting ? 60 : 100;
    setTimeout(typeLoop, speed);
}

typeLoop();
