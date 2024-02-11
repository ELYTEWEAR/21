const reelSymbols = ["🍒", "🍋", "🍉", "💎", "🔔"];
const spinCost = 5;
let balance = 100;
let spinning = false;

document.getElementById('spinButton').addEventListener('click', spinReels);

function spinReels() {
    if (spinning || balance < spinCost) return;
    spinning = true;
    balance -= spinCost;
    updateDisplay();

    const reels = [1, 2, 3].map(i => document.getElementById(`symbols${i}`));
    reels.forEach(reel => {
        reel.innerHTML = ''; // Clear current symbols
        for (let i = 0; i < 10; i++) { // Populate with random symbols for spinning effect
            const symbol = document.createElement('div');
            symbol.className = 'symbol';
            symbol.textContent = reelSymbols[Math.floor(Math.random() * reelSymbols.length)];
            reel.appendChild(symbol);
        }
        reel.style.transition = 'none';
        reel.style.transform = 'translateY(0)';
        setTimeout(() => {
            reel.style.transition = 'transform 2s ease-out';
            reel.style.transform = 'translateY(-' + reel.clientHeight / 2 + 'px)';
        }, 10);
    });

    setTimeout(() => {
        spinning = false;
        evaluateWin();
    }, 2100);
}

function evaluateWin() {
    // Simplified win evaluation for demonstration
    if (Math.random() < 0.5) {
        balance += 10; // Random win condition for demonstration
        showMessage("You win!");
    } else {
        showMessage("Try again!");
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('balance').textContent = `Balance: $${balance}`;
}

function showMessage(message) {
    const messageBox = document.getElementById('message');
    messageBox.textContent = message;
    setTimeout(() => messageBox.textContent = '', 2000);
}

document.addEventListener('DOMContentLoaded', updateDisplay);
