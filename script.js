// ==========================
// Dynamic Greeting (Day/Night)
// ==========================
function setGreeting() {
  const header = document.querySelector('header p');
  const hour = new Date().getHours();
  
  if(hour >= 6 && hour < 12) {
    header.textContent = "Good morning! I'm a Frontend Developer | HTML, CSS, JavaScript 🌞";
  } else if(hour >= 12 && hour < 18) {
    header.textContent = "Good afternoon! I'm a Frontend Developer | HTML, CSS, JavaScript ☀️";
  } else if(hour >= 18 && hour < 22) {
    header.textContent = "Good evening! I'm a Frontend Developer | HTML, CSS, JavaScript 🌆";
  } else {
    header.textContent = "Good night! I'm a Frontend Developer | HTML, CSS, JavaScript 🌙";
  }
}

setGreeting();

// ==========================
// Smooth Scroll for Navigation
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ==========================
// Dark Mode Toggle Button
// ==========================
const toggleBtn = document.createElement('button');
toggleBtn.textContent = "Toggle Dark Mode";
toggleBtn.style.position = 'fixed';
toggleBtn.style.top = '10px';
toggleBtn.style.right = '10px';
toggleBtn.style.padding = '8px 12px';
toggleBtn.style.backgroundColor = '#0077ff';
toggleBtn.style.color = '#fff';
toggleBtn.style.border = 'none';
toggleBtn.style.borderRadius = '5px';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.zIndex = '1000';
document.body.prepend(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ==========================
// Project Modal / Alert
// ==========================
document.querySelectorAll('.project a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    alert(`This project is coming soon!`);
  });
});

// ==========================
// Fade-in Sections on Scroll
// ==========================
const sections = document.querySelectorAll('section');

function revealSections() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(top < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);
