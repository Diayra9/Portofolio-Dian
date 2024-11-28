// Get elements
const warningButtons = document.querySelectorAll('.warning-button'); // Use class selector
const popup = document.getElementById('popup'); // Popup element
const closeBtn = document.querySelector('.close-btn'); // Close button

// Add click event to each warning button
warningButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        popup.classList.remove('hidden'); // Show popup
    });
});

// Add click event to close button
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        popup.classList.add('hidden'); // Hide popup
    });
}

// Close popup when clicking outside of content
if (popup) {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.add('hidden');
        }
    });
}
