document.addEventListener('DOMContentLoaded', () => {
    const gameText = document.getElementById('game-text');
    const playerInput = document.getElementById('player-input');
    const submitButton = document.getElementById('submit-button');

    let player;

    function startGame() {
        gameText.innerHTML = '<p>Welcome to the Text-Based RPG! What is your name?</p>';
    }

    function handleInput() {
        const input = playerInput.value.trim().toLowerCase();
        playerInput.value = '';

        if (!input) return;

        if (!player) {
            player = new Player(input);
            gameText.innerHTML += `<p>Hello, ${player.name}! Your adventure begins now.</p>`;
            gameText.innerHTML += `<p>Type 'help' to see a list of commands.</p>`;
        } else {
            processCommand(input);
        }

        playerInput.focus();
    }

    function processCommand(command) {
        switch (command) {
            case 'help':
                gameText.innerHTML += `
                    <p>Available commands:</p>
                    <ul>
                        <li>status - Check your current status.</li>
                        <li>inventory - Check your inventory.</li>
                        <li>look - Look around your current location.</li>
                        <li>quit - Quit the game.</li>
                    </ul>`;
                break;
            case 'status':
                gameText.innerHTML += `<p>${player.displayStatus('You check your status:')}</p>`;
                break;
            case 'inventory':
                gameText.innerHTML += `<p>You check your inventory: ${player.inventory.length > 0 ? player.inventory.join(', ') : 'Your inventory is empty.'}</p>`;
                break;
            case 'look':
                gameText.innerHTML += `<p>You look around but don't see anything interesting yet.</p>`;
                break;
            case 'quit':
                gameText.innerHTML += `<p>Thank you for playing! Goodbye, ${player.name}.</p>`;
                playerInput.disabled = true;
                submitButton.disabled = true;
                break;
            default:
                gameText.innerHTML += `<p>Unknown command: ${command}. Type 'help' for a list of commands.</p>`;
                break;
        }
    }

    submitButton.addEventListener('click', handleInput);
    playerInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleInput();
        }
    });

    startGame();
});
