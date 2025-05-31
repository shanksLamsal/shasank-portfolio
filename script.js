
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  document.body.style.backgroundColor = isDark ? '#1e1e1e' : '#ffffff';
  document.body.style.color = isDark ? '#ffffff' : '#000000';
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
});
