const reels = document.querySelectorAll('.reel');
const balanceDisplay = document.getElementById('balance');
const spinButton = document.getElementById('spinButton');
const symbols = [
    'url("path_to_hoodie_image.jpg")', // Replace with the path to your hoodie image
    'url("path_to_tee_image.jpg")', // Replace with the path to your tee image
    'url("path_to_hat_image.jpg")', // Replace with the path to your hat image
    'url("path_to_store_credit_image.jpg")' // Replace with the path to your $25 store credit image
];
let balance = 100;

function spinReel(reel) {
    reel.style.backgroundImage = symbols[Math.floor(Math.random() * symbols.length)];
}

function spinReels() {
    balance -= 10; // Cost per spin
    reels.forEach(reel => {
        const spinCount = 10 + Math.floor(Math.random() * 10); // Each reel will spin a random number of times
        for (let i = 0; i < spinCount; i++) {
            setTimeout(() => spinReel(reel), i * 100);
        }
    });
    setTimeout(checkWin, spinCount * 100); // Check for win after the last reel stops
    updateBalanceDisplay();
}

function checkWin() {
    // Implement win checking logic here
}

function updateBalanceDisplay() {
    balanceDisplay.textContent = `Balance: $${balance}`;
}

spinButton.addEventListener('click', () => {
    if (balance >= 10) {
        spinReels();
    } else {
        alert('Insufficient balance!');
    }
});
