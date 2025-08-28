// --- Waktu yang berjalan ---
const timeElapsedEl = document.getElementById('time-elapsed');
const startDate = new Date('August 28, 2025 10:30:00');

function updateTime() {
    const now = new Date();
    const elapsed = now.getTime() - startDate.getTime();

    if (elapsed < 0) {
        // Jika tanggal awal belum tercapai, tampilkan 0
        timeElapsedEl.textContent = '00:00:00:00';
        return;
    }

    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const milliseconds = elapsed % 1000;

    const format = (num, digits) => String(num).padStart(digits, '0');
    const microseconds = Math.floor(milliseconds / 10);

    timeElapsedEl.textContent = `${format(hours, 2)}:${format(minutes % 60, 2)}:${format(seconds % 60, 2)}:${format(microseconds, 2)}`;
}

// Update waktu setiap 10 milidetik
setInterval(updateTime, 10);
updateTime();

// --- Animasi karakter acak ---
const aboutMeEl = document.getElementById('about-me');
const originalText = "About me";
const duration = 2000; // 2 detik
const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]:";\'<>?,./|\\';

function getRandomChar() {
    return charset[Math.floor(Math.random() * charset.length)];
}

function animateText() {
    let startTime = null;

    function frame(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = progress / duration;

        if (percentage < 1) {
            let newText = '';
            for (let i = 0; i < originalText.length; i++) {
                newText += getRandomChar();
            }
            aboutMeEl.textContent = newText;
            requestAnimationFrame(frame);
        } else {
            aboutMeEl.textContent = originalText;
        }
    }

    requestAnimationFrame(frame);
}

// Mulai animasi saat halaman dimuat
window.addEventListener('load', animateText);