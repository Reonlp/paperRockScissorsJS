const choices = document.querySelectorAll('.choices');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
}

//Play game
function play(e){
    restart.style.display = 'inline-block;'
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    console.log(winner);
    showWinner(winner, computerChoice);
}

//Get computer's choice
function getComputerChoice(){
    const rand = Math.random();
    if(rand < 0.34){
        return 'rock';
    } else if(rand <= 0.67){
        return 'paper';
    } else {
        return 'scissors';
    }
}

//Get game winner
function getWinner(p, c){
    if(p === c){
        return 'draw';
    } else if(p === 'rock'){
        if(c === 'paper'){
            return 'computer';
        } else {
            return 'player';
        }
    } else if (p === 'paper'){
        if(c === 'scissors'){
            return 'computer';
        } else {
            return 'player'
        }
    } else if(p === 'scissors'){
        if(c === 'rock'){
            return 'computer';
        } else {
            return 'player';
        }
    }
}

function showWinner(winner, computerChoice){
    if(winner === 'player'){
        scoreboard.player++;
        result.innerHTML = `
            <h1 class="text-win"> You win! </h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"> </i>
            <p>Computer chose <strong> ${computerChoice}</strong></p>
            `;
    } else if (winner === 'computer'){
        scoreboard.computer++;
        result.innerHTML = `
            <h1 class="text-win"> You lose! </h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"> </i>
            <p>Computer chose <strong> ${computerChoice}</strong></p>
            `;
    } else {
        result.innerHTML = `
        <h1> It's a draw! </h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"> </i>
        <p>Computer chose <strong> ${computerChoice}</strong></p>
        `;
    }

    score.innerHTML = `
        <p>Player: ${scoreboard.player} </p>
        <p> Computer: ${scoreboard.computer} </p>
        `;

    modal.style.display = 'block';
}

//Restart game
function restartGame(){
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `<p> Player: 0 </p> <p> Computer: 0 </p>`;
}

//ClearModal
function clearModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

//Event listeners
choices.forEach(choice => choice.addEventListener('click', play));

window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);