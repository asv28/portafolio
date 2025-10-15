// EFECTO DE TEXTO (tipo máquina de escribir)
const text = "Mayoristas de flores y complementos";
let index = 0;

function typeEffect() {
  const typed = document.getElementById("typed-text");
  if (index < text.length) {
    typed.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
window.onload = typeEffect;

// EFECTO DE APARICIÓN AL HACER SCROLL
const elements = document.querySelectorAll('.card, .video, .contacto');

function reveal() {
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', () => {
  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s ease';
  });
  reveal();
});

// 🌸 EFECTO DE PÉTALOS QUE DESAPARECEN AL FINAL DEL HERO
const petalImages = [
  'imagenes/imagen_petalos.png',
  'imagenes/imagen_petalos1.png',
  'imagenes/imagen_petalo2.png'
];

function createPetal() {
  const hero = document.querySelector('.hero');
  const heroHeight = hero.offsetHeight;

  const petal = document.createElement('div');
  petal.classList.add('petal');

  const randomPetal = petalImages[Math.floor(Math.random() * petalImages.length)];
  petal.style.backgroundImage = `url('${randomPetal}')`;
  petal.style.left = Math.random() * 100 + '%';

  const fallDuration = 5 + Math.random() * 5;
  petal.style.animationDuration = fallDuration + 's';
  petal.style.opacity = Math.random() * 0.7 + 0.3;
  const scale = Math.random() * 0.7 + 0.3;
  petal.style.transform = `scale(${scale}) rotate(${Math.random() * 360}deg)`;

  // 👉 Importante: ahora los pétalos van dentro del hero
  hero.appendChild(petal);

  // Hacer que se desvanezcan antes de llegar abajo
  setTimeout(() => {
    petal.style.transition = 'opacity 1.5s ease-out';
    petal.style.opacity = 0;
    setTimeout(() => petal.remove(), 1500);
  }, fallDuration * 1000 - 1500);
}

setInterval(createPetal, 300);


// BOTÓN VOLVER ARRIBA
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Mostrar las cards con animación
const cards = document.querySelectorAll('.card');
function showCards() {
  const trigger = window.innerHeight * 0.8;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', showCards);
window.addEventListener('load', showCards);

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      const topOffset = target.offsetTop - 50; // ajusta si el header tapa
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  });
});


