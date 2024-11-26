// Function to handle the blur removal and re-application based on visibility
function checkIfInView() {
    const servicesSection = document.getElementById('services');
    const rect = servicesSection.getBoundingClientRect();

    // Check if the section is at least 50% visible (top or bottom of the section)
    const isPartiallyVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

    if (isPartiallyVisible) {
        // Remove the blur smoothly if the section is partially visible
        servicesSection.style.filter = 'blur(0)';
        servicesSection.style.opacity = '1'; // Make it fully visible
    } else {
        // Reapply the blur smoothly if less than 50% of the section is visible
        servicesSection.style.filter = 'blur(30px)';
        servicesSection.style.opacity = '0.9'; // Slightly reduce opacity for better blur effect
    }
}

// Listen for scroll and resize events to check visibility
window.addEventListener('scroll', checkIfInView);
window.addEventListener('resize', checkIfInView);

// Initial check when page loads
checkIfInView();
