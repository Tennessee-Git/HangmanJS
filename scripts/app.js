let game1
const puzzleDIV = document.querySelector('#puzzle');
const remainingDIV = document.querySelector('#guesses');
const guessedDIV = document.querySelector('#lettersList');
const imgDIV = document.querySelector('#hangman');

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render();
});

const render = () =>{
    puzzleDIV.innerHTML = '';
    remainingDIV.textContent = game1.statusMessage;
    guessedDIV.textContent = 'You guessed: ' + game1.guessedLetters.toString();
    imgDIV.src = `./images/${game1.remainingGuesses}.png`;

    game1.puzzle.split('').forEach((letter) => {
        const letterEL = document.createElement('span');
        letterEL.textContent = letter;
        puzzleDIV.appendChild(letterEL);
    });
}

const startGame = async () => {
    const puzzle = await getWords('2');
    game1 = new Hangman(puzzle, 10);
    render();
}

document.querySelector('#reset').addEventListener('click', startGame);
startGame();