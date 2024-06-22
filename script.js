document.addEventListener('DOMContentLoaded', () => {
    const diceButtons = document.querySelectorAll('.dice');
    const selectedDiceArea = document.getElementById('selected-dice');
    const totalDisplay = document.getElementById('total').querySelector('span');
    const rollButton = document.getElementById('roll-button');
    const clearButton = document.getElementById('clear-dice');
    
    let selectedDice = [];
    let total = 0;

    diceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sides = parseInt(button.dataset.sides);
            addDie(sides);
        });
    });

    function addDie(sides) {
        const die = document.createElement('div');
        die.className = 'die';
        die.dataset.sides = sides;
        die.textContent = '?';
        selectedDiceArea.appendChild(die);
        selectedDice.push(sides);
    }

    function rollDice() {
        total = 0;
        selectedDice.forEach((sides, index) => {
            const result = Math.floor(Math.random() * sides) + 1;
            const die = selectedDiceArea.children[index];
            die.textContent = result;
            total += result;
            
            // Adiciona uma pequena animação
            die.style.transform = 'scale(1.2)';
            setTimeout(() => {
                die.style.transform = 'scale(1)';
            }, 100);
        });
        totalDisplay.textContent = total;
    }

    function clearDice() {
        selectedDiceArea.innerHTML = '';
        selectedDice = [];
        total = 0;
        totalDisplay.textContent = total;
    }

    rollButton.addEventListener('click', rollDice);
    clearButton.addEventListener('click', clearDice);
});