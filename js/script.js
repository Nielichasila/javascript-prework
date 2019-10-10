function getMoveName(argMoveId){
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

console.log(getMoveName('2'))


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
    computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else if(randomNumber == 3){
    computerMove = 'nożyce';
}*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
    playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){
    playerMove = 'nożyce';
} else if(playerInput=='nieznany ruch'){
    playerMove = 'wybierz 1,2 lub 3';
}*/
printMessage('Twój ruch to: ' + playerMove);


function displayResults(argComputerMove, argPlayerMove){
    
printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    
 if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
     printMessage('Wygrywasz!');
} else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Przegrywasz!');
} else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis!');
} else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis!');
} else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Przegrywasz!');
} else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
} else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Przegrywasz!');
} else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Wygrywasz!');
} else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis!');
} else if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Wygrywasz!');
}
 printMessage('wynik: ' + displayResult(argComputerMove, argPlayerMove));
}




    
/*
} else if( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
    printMessage('wybierz 1,2 lub 3!');
} else if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
    printMessage('wybierz 1,2 lub 3!');
} else if( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
    printMessage('wybierz 1,2 lub 3!');
}*/
