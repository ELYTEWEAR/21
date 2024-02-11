/* script.js */
document.getElementById('spinButton').addEventListener('click', spinReels);

let balance = 100; // Starting balance

function spinReels() {
    // Randomly update reel backgrounds to simulate spinning
    const symbols = ["🍒", "🍋", "🍉", "🔔", "💎"];
    for (let i = 1; i <= 3; i++) {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        document.getElementById(`reel${i}`).textContent = symbol;
    }

    // Simple win/lose logic to update balance
    if (Math.random() < 0.5) { // 50% chance to win
        balance += 10; // Win: increase balance
        document.getElementById('message').textContent = "You win!";
    } else {
        balance -= 10; // Lose: decrease balance
        document.getElementById('message').textContent = "You lose!";
    }

    // Update balance display
    document.getElementById('balance').textContent = `Balance: $${balance}`;
}
