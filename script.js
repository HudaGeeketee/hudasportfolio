// Typing Animation
const typingText = document.querySelector('.typing-text span');
const words = ['silly', 'goofy', 'cool', 'inside your walls'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

// Smooth scrolling and tab switching for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');

    if (href === '#portfolio') {
      e.preventDefault(); // Prevent scrolling for Portfolio
      document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
      const portfolioSection = document.querySelector(href);
      if (portfolioSection) {
        portfolioSection.style.display = 'block';
      }
    } else {
      e.preventDefault(); 
      // Reset all sections to visible for other links
      document.querySelectorAll('section').forEach(sec => sec.style.display = 'block');

      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Random rotation for social icons
document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    const randomDegree = Math.floor(Math.random() * 180) - 25;
    icon.style.setProperty('--rotation', `${randomDegree}deg`);
  });

  icon.addEventListener('click', (e) => {
    const href = icon.getAttribute('href');
    if (href && href !== '#') {
      window.open(href, '_blank');
    }
  });
});

// Start typing animation when page loads
window.onload = () => {
  type();
};
