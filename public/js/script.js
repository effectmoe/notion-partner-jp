// Simple animation for elements to fade in
document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    // Add a simple fade-in effect
    setTimeout(() => {
        heroText.style.opacity = '1';
    }, 300);
    
    setTimeout(() => {
        heroImage.style.opacity = '1';
    }, 600);
}); 