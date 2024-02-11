document.getElementById('spinButton').addEventListener('click', spinReels);

function spinReels() {
    const reels = document.querySelectorAll('.reel');

    reels.forEach((reel, index) => {
        // Trigger the spinning animation
        reel.classList.add('spinning');

        // Set a timeout to stop the spin and display the result
        setTimeout(() => {
            reel.classList.remove('spinning');

            // Randomly select the symbol to display
            const symbols = reel.querySelectorAll('.symbol');
            symbols.forEach(sym => sym.style.opacity = '0'); // Hide all symbols
            const selectedSymbol = Math.floor(Math.random() * symbols.length);
            symbols[selectedSymbol].style.opacity = '1'; // Show selected symbol
        }, 1000 + index * 500); // Stagger the stopping of each reel
    });

    // Update balance and message as before
}
