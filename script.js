document.addEventListener('DOMContentLoaded', () => {
    const diceTypeSelect = document.getElementById('dice-type');
    const diceResult = document.getElementById('dice-result');
    const rollButton = document.getElementById('roll-button');

    function rollDice() {
        const selectedDice = parseInt(diceTypeSelect.value);
        const result = Math.floor(Math.random() * selectedDice) + 1;
        diceResult.textContent = result;
        
        // Adiciona uma pequena animação
        diceResult.style.transform = 'scale(1.2)';
        setTimeout(() => {
            diceResult.style.transform = 'scale(1)';
        }, 100);
    }

    rollButton.addEventListener('click', rollDice);
});