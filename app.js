const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;


	
	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn,paperBtn,scissorBtn];
		const computerOptions = ['rock','paper','scissors']
		
		
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${5-moves}`;
				

				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				
				winner(this.innerText,computerChoice)
				
				
				if(moves == 5){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}

	
	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = 'You both chose the same weapon'
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.textContent = 'It beat you this round';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			}else{
				result.textContent = 'You beat it this round '
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.textContent = 'It beat you this round';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'You beat it this round';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.textContent = 'It beat you this round';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'You beat it this round';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}

	
	const gameOver = (playerOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

	
		chooseMove.innerText = 'Looks like the game is over, that was quick!!'
		movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You got lucky'
			result.style.color = 'white';
		}
		else if(playerScore < computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'Can you believe you lost to a computer??';
			result.style.color = 'white';
		}
		else{
			result.style.fontSize = '2rem';
			result.innerText = 'Tying is lame';
			result.style.color = 'white'
		}
		reloadBtn.innerText = 'Startover';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}


	
	playGame();
	
}


game();













