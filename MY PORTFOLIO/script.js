/* ========== Sidebar Toggle (right, half-screen) ========== */
const hamburger = document.getElementById('hamburger');
const sidebar   = document.getElementById('sidebar');
const overlay   = document.getElementById('overlay');
const closeBtn  = document.getElementById('closeSidebar');
const sideLinks = document.querySelectorAll('.side-link');

function openSidebar(){
  sidebar.classList.add('open');
  overlay.classList.add('show');
  sidebar.setAttribute('aria-hidden', 'false');
  overlay.setAttribute('aria-hidden', 'false');
}
function closeSidebar(){
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
  sidebar.setAttribute('aria-hidden', 'true');
  overlay.setAttribute('aria-hidden', 'true');
}

hamburger.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);
sideLinks.forEach(a => a.addEventListener('click', closeSidebar));

/* ========== Fade-in on Scroll ========== */
const observed = document.querySelectorAll('.fade-in, .fade-left, .fade-right');

const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    obs.unobserve(entry.target);
  });
}, { threshold: 0.25 });

observed.forEach(el => io.observe(el));

window.addEventListener("scroll", function() {
  let scroll = window.scrollY;
  document.querySelector(".parallax video").style.transform = `translateY(${scroll * 0.3}px)`;
});

