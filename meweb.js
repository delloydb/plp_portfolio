const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Initialize theme based on user preference or default
const savedTheme = localStorage.getItem('theme') || 'dark';
body.classList.add(savedTheme === 'light' ? 'light-mode' : 'dark-mode');

themeToggle.addEventListener('click', () => {
    // Toggle between dark and light modes
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light');
    }
});
