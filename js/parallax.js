// Simple Parallax Scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('figure img').forEach(img => {
    img.style.transform = `translateY(${window.scrollY * 0.1}px)`;
  });
});
