document.addEventListener("DOMContentLoaded", () => {
    // Select all elements to animate
    const aboutLeft = document.querySelector(".about-left");
    const aboutRight = document.querySelector(".about-right");
    const contactItems = document.querySelectorAll(".contact-list li");

    // Observer options
    const observerOptions = {
        threshold: 0.2,
    };

    // Observer callback
    const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    };

    // Create observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe about sections and contact items
    observer.observe(aboutLeft);
    observer.observe(aboutRight);
    contactItems.forEach((item) => observer.observe(item));
});