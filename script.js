document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById("timer");
    const startButton = document.getElementById("start-button");
    const player1Button = document.getElementById("player1-button");
    const player2Button = document.getElementById("player2-button");
    const resultElement = document.getElementById("result");
    let timer = 10;
    let isGameRunning = false;
    let player1Clicks = 0;
    let player2Clicks = 0;

    startButton.addEventListener("click", startGame);
    player1Button.addEventListener("click", () => incrementClickCount(1));
    player2Button.addEventListener("click", () => incrementClickCount(2));

    function startGame() {
        if (!isGameRunning) {
            isGameRunning = true;
            startButton.disabled = true;

            const countdown = setInterval(function () {
                timer--;
                timerElement.innerText = timer;
                if (timer <= 0) {
                    clearInterval(countdown);
                    isGameRunning = false;
                    startButton.disabled = false;
                    determineWinner();
                }
            }, 1000);

            player1Button.style.display = "block";
            player2Button.style.display = "block";
            resultElement.innerText = "";
            player1Clicks = 0;
            player2Clicks = 0;
        }
    }

    function incrementClickCount(player) {
        if (isGameRunning) {
            if (player === 1) {
                player1Clicks++;
            } else if (player === 2) {
                player2Clicks++;
            }
        }
    }

    function determineWinner() {
        if (player1Clicks > player2Clicks) {
            resultElement.innerText = "Player 1 wins!";
        } else if (player2Clicks > player1Clicks) {
            resultElement.innerText = "Player 2 wins!";
        } else {
            resultElement.innerText = "It's a tie!";
        }
    }
});
