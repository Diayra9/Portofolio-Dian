document.addEventListener("DOMContentLoaded", () => {
    // Section for animation
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

    // Section for file modal
    const modal = document.getElementById("fileModal");
    const fileViewer = modal.querySelector(".file-viewer");
    const closeModal = modal.querySelector(".close-modal");

    // Open modal and load file
    document.querySelector(".view-file").addEventListener("click", (e) => {
        e.preventDefault();
        const filePath = e.target.dataset.file;
        if (filePath) {
            fileViewer.src = filePath; // Load file into iframe
            modal.style.display = "block";
        } else {
            console.error('File path is not provided.');
        }
    });

    // Close modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        fileViewer.src = ""; // Clear iframe content
    });

    // Close modal on outside click
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            fileViewer.src = ""; // Clear iframe content
        }
    });
});
