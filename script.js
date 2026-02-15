const starsContainer = document.querySelector('.stars');

for (let i = 0; i < 120; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';

  const duration = Math.random() * 3 + 2;
  star.style.animationDuration = duration + 's';

  const delay = Math.random() * 5;
  star.style.animationDelay = delay + 's';

  starsContainer.appendChild(star);
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  localStorage.setItem("playMusic", "yes");
  window.location.href = "flores.html";
});