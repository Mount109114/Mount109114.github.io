const words = [
  "research",
  "engineering",
  "experimental systems"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;
const typingEl = document.getElementById("typing");

function typeLoop() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    charIndex++;
    typingEl.textContent = currentWord.slice(0, charIndex);

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeLoop, 1200);
      return;
    }
  } else {
    charIndex--;
    typingEl.textContent = currentWord.slice(0, charIndex);

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeLoop, deleting ? 55 : 95);
}

typeLoop();
