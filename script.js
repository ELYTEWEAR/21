document.getElementById('spinButton').addEventListener('click', spinReels);

let balance = 100; // Starting balance

function spinReels() {
    const reels = document.querySelectorAll('.reel');

    reels.forEach((reel, index) => {
        // Add spinning effect
        reel.classList.add('spinning');

        setTimeout(() => {
            // Stop spinning effect
            reel.classList.remove('spinning');

            // Randomly select a symbol to show
            const symbols = ["🍒", "🍋", "🍉", "🔔", "💎"];
            const selectedSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            reel.innerHTML = ''; // Clear previous symbols
            const symbolElement = document.createElement('div');
            symbolElement.classList.add('symbol');
            symbolElement.textContent = selectedSymbol;
            reel.appendChild(symbolElement);

            // Show the selected symbol
            setTimeout(() => {
                symbolElement.style.opacity = '1';
            }, 100); // Short delay to ensure the opacity transition runs

        }, 1000 + index * 500); // Stagger the stopping of each reel
    });

    updateBalanceAndMessage();
}

function updateBalanceAndMessage() {
    // Simple logic for win/lose
    if (Math.random() < 0.5) { // 50% chance to win
        balance += 10; // Win: increase balance
        document.getElementById('message').textContent = "You win!";
    } else {
        balance -= 10; // Lose: decrease balance
        document.getElementById('message').textContent = "You lose!";
    }

    // Update balance display
    document.getElementById('balance').textContent = `Balance: $${balance}`;

    // Check for game over
    if (balance <= 0) {
        document.getElementById('message').textContent = "Game Over!";
        document.getElementById('spinButton').disabled = true; // Disable spin button
    }
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('balance').textContent = `Balance: $${balance}`;
});
