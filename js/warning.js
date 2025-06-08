// Get elements
const warningButtons = document.querySelectorAll('.warning-button'); // untuk general warning
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

const desktopWarningLinks = document.querySelectorAll('.desktop-warning-link'); // GANTI id jadi class!
const desktopPopup = document.getElementById('desktop-popup');
const closeDesktopBtn = document.querySelector('.close-desktop-btn');
const keepViewingBtn = document.getElementById('keep-viewing-btn');

let targetLink = ''; // Menyimpan link tujuan

// Event: warning umum
warningButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.remove('hidden');
    });
});

// Close general popup
if (closeBtn) {
    closeBtn.addEventListener('click', () => popup.classList.add('hidden'));
}
if (popup) {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) popup.classList.add('hidden');
    });
}

// Event: semua tombol desktop-warning
desktopWarningLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        targetLink = e.currentTarget.getAttribute('data-link');
        desktopPopup.classList.remove('hidden');
    });
});

// Tombol close desktop popup
if (closeDesktopBtn) {
    closeDesktopBtn.addEventListener('click', () => {
        desktopPopup.classList.add('hidden');
    });
}

// Tombol "Keep Viewing"
if (keepViewingBtn) {
    keepViewingBtn.addEventListener('click', () => {
        desktopPopup.classList.add('hidden');
        if (targetLink) window.open(targetLink, '_blank');
    });
}

// Klik luar popup desktop
if (desktopPopup) {
    desktopPopup.addEventListener('click', (e) => {
        if (e.target === desktopPopup) desktopPopup.classList.add('hidden');
    });
}
