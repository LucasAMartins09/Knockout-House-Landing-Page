
 
document.addEventListener('DOMContentLoaded', () => {
  
  const topbar = document.querySelector('.topbar');
  if (topbar) {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'theme-toggle-btn';
    toggleBtn.setAttribute('aria-label', 'Alternar tema escuro e claro');
    topbar.appendChild(toggleBtn);

    
    const savedTheme = localStorage.getItem('kh-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

 
    setTheme(initialTheme, toggleBtn);

    
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme, toggleBtn);
    });
  }
});


function setTheme(theme, button) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('kh-theme', theme);
  
 
  button.innerHTML = theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Escuro';
}
