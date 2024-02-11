document.getElementById('spinButton').addEventListener('click', spinReels);

let balance = 100; // Starting balance
const spinCost = 5;
const reelSymbols = ["🍒", "🍋", "🍉", "🔔", "💎", "🎰"]; // Include a special symbol for bonus
const freeSpinSymbol = "🎰"; // Bonus symbol for free spins
let freeSpins = 0;

function spinReels() {
    if (balance < spinCost && freeSpins === 0) {
        alert("Not enough balance for a spin.");
        return;
    }

    if (freeSpins === 0) {
        balance -= spinCost; // Deduct cost of spin
    } else {
        freeSpins--; // Use a free spin
    }

    const results = [];
    for (let i = 1; i <= 3; i++) {
        const symbol = reelSymbols[Math.floor(Math.random() * reelSymbols.length)];
        document.getElementById(`reel${i}`).textContent = symbol;
        results.push(symbol);
    }

    checkResults(results);
    updateDisplay();
}

function checkResults(results) {
    const uniqueSymbols = new Set(results);

    if (uniqueSymbols.size === 1) {
        // All symbols match
        win(50);
    } else if (results.includes(freeSpinSymbol)) {
        // Bonus symbol for free spins
        freeSpins += 1;
        document.getElementById('message').textContent = "You won a free spin!";
    }

    // Implement scatter feature logic here

    if (freeSpins > 0) {
        document.getElementById('message').textContent += " Free spins left: " + freeSpins;
    }
}

function win(amount) {
    balance += amount;
    document.getElementById('message').textContent = "You win $" + amount + "!";
}

function updateDisplay() {
    document.getElementById('balance').textContent = `Balance: $${balance}`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateDisplay();
});
