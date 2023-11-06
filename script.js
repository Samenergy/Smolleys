document.addEventListener("DOMContentLoaded", function() {
    // Get the element with the class "features"
    const featuresSection = document.querySelector(".features");

    // Check if the element exists
    if (featuresSection) {
        // Create a GSAP timeline for the animation
        const tl = gsap.timeline();

        // Set the initial state (hidden)
        tl.set(featuresSection, { opacity: 0, scale: 0.8 });

        // Add animations to fade in and scale up the section
        tl.to(featuresSection, {
            opacity: 1,
            scale: 1,
            duration: 1, // Animation duration in seconds
        });

        // Trigger the animation when the page is loaded
        tl.play();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Initialize AOS
    AOS.init({
        once: true, // Only trigger the animation once
    });
});
