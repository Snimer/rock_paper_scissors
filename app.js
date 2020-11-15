const game = () => {
	let pScore = 0;
	let cScore = 0;

	// Starts the game.
	const startGame = () => {
		const playBtn = document.querySelector(".intro button");
		const introScreen = document.querySelector(".intro");
		const match = document.querySelector(".match");

		playBtn.addEventListener("click", () => {
			introScreen.classList.add("fadeOut");
			match.classList.add("fadeIn");
		});
	};

	// Play match
	const playMatch = () => {
		const options = document.querySelectorAll(".options button");
		const playerHand = document.querySelector(".player-hand");
		const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener('animationend', function (){
                this.style.animation = '';
            })
        });


		// computer options
		const computerOptions = ['rock', 'paper', 'scissors'];

		options.forEach(option => {
			option.addEventListener("click", function() {
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[computerNumber];

                playerHand.src = `./images/rock.png`;
                computerHand.src = `./images/rock.png`;

                setTimeout(() => {
                    // calls compareHands to change the title
                    compareHands(this.textContent, computerChoice);

                    // updates the images
                    playerHand.src = `./images/${this.textContent}.png`;
                    computerHand.src = `./images/${computerChoice}.png`;
                }, 2000)

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

			});
		});
	};

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

	const compareHands = (playerChoice, computerChoice) => {
		const winner = document.querySelector('.winner');

		// checking for tie
		if (playerChoice === computerChoice) {
			winner.textContent = 'It is a tie';
			return;
		}

		// checking for Rock
		if (playerChoice === 'rock') {
			if (computerChoice === 'scissors') {
				winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
    			return;
			} else {
				winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
    			return;
			}
		}

		// checking for Paper
		if (playerChoice === 'paper') {
			if (computerChoice === 'rock') {
				winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
    			return;
			} else {
				winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
    			return;
			}
		}

		// checking for Scissors
		if (playerChoice === 'scissors') {
			if (computerChoice === 'paper') {
				winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
    			return;
			} else {
				winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
    			return;
			}
		}
	}

	// functions are called here
	startGame();
	playMatch();
};

game();
