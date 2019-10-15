{
const playGame = function (playerInput){  
    clearMessages();

const stone = 'kamień';
const paper = 'papier';
const scissors = 'nożyce';
    
const getMoveName = function (argMoveId){
    if(argMoveId == 1){
        return stone;
    } else if(argMoveId == 2){
        return paper;
    } else if(argMoveId == 3){
        return scissors;
    }    else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}
const displayResult = function (argComputerMove, argPlayerMove) {
    if (argComputerMove == stone && argPlayerMove == paper || argComputerMove == paper && argPlayerMove == scissors || argComputerMove == scissors && argPlayerMove == stone) {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == paper && argPlayerMove == stone || argComputerMove == stone && argPlayerMove == scissors || argComputerMove == scissors && argPlayerMove == paper) {
        printMessage('Przegrywasz!');
    } else if (argComputerMove == argPlayerMove) {
        printMessage('Remis!');
    } else {
        printMessage('Błąd! Wybierz 1,2 lub 3!');
    }
}

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
});
}