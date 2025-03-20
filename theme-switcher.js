document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on saved preference or system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
    } else {
        document.body.classList.remove('dark-mode');
        updateThemeIcon(false);
    }
    
    // Toggle theme when button is clicked
    themeToggleBtn.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        
        // Update the icon based on the current theme
        updateThemeIcon(isDarkMode);
        
        // Save theme preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
    
    // Update the theme icon appearance
    function updateThemeIcon(isDarkMode) {
        if (isDarkMode) {
            // In dark mode, show moon icon
            themeIcon.classList.remove('fa-lightbulb');
            themeIcon.classList.add('fa-moon');
        } else {
            // In light mode, show sun icon
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-lightbulb');
        }
    }

    // Force consistent zoom level
    if (navigator.userAgent.indexOf("Chrome") != -1) {
        // Only apply to Chrome
        document.documentElement.style.transform = "scale(1)";
        document.documentElement.style.transformOrigin = "top left";
    }
});