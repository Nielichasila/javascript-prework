{
const playGame = function (playerInput){  
    clearMessages();
    
const getMoveName = function (argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nożyce';
    }    else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}
const displayResult = function (argComputerMove, argPlayerMove) {
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień' || argComputerMove == 'kamień' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
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