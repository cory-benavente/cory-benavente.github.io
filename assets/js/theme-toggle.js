// my-pm-portfolio/assets/js/theme-toggle.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body; // Represents the <body> tag in HTML
    const themeKey = 'theme-preference'; // Key for localStorage

    // Function to apply the chosen theme by adding/removing 'dark-mode' class
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode'); // Add dark-mode class for dark theme
        } else {
            body.classList.remove('dark-mode'); // Remove dark-mode class for light theme (default)
        }
    }

    // 1. On page load: Check for saved theme preference in localStorage
    //    If no saved preference, check system preference. Default to light.
    const savedTheme = localStorage.getItem(themeKey);

    if (savedTheme) {
        // If a theme is saved, apply it
        applyTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        // If no theme saved, but system prefers dark mode, apply dark mode
        applyTheme('dark');
    } else {
        // Default to light mode if no preference saved and system prefers light or no preference
        // This will ensure no 'dark-mode' class is present if light is the initial state.
        applyTheme('light');
    }

    // 2. Add event listener to the toggle button
    themeToggle.addEventListener('click', () => {
        // Determine the current theme based on the presence of 'dark-mode' class
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        // Determine the new theme to switch to
        const newTheme = currentTheme === 'light' ? 'dark' : 'light'; // Logic remains the same: light -> dark, dark -> light

        // Apply the new theme
        applyTheme(newTheme);

        // Save the new theme preference to localStorage
        localStorage.setItem(themeKey, newTheme);
    });
});