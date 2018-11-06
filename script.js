/**
 * 0 = leeg
 * 1 = boot
 * 2 = leeg geschoten
 * 3 = boot geschoten
 */

var Borden = [
    [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,0],
        [0,0,1,0,0,0,0,0,0,0],
        [0,0,1,0,0,1,1,1,1,0],
        [0,0,1,0,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1],
        [0,0,0,1,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,1,0,0,0,0,0],
        [0,1,0,0,1,0,0,1,0,0],
        [0,1,0,0,0,0,0,1,0,0],
        [0,1,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,1,0,1,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,1,0,0],
        [0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,1,0,0,0],
        [1,0,0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,1,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,1,0,1,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,1,0],
        [0,0,1,0,1,0,0,0,1,0],
        [0,0,1,0,1,0,0,0,1,0],
        [0,0,1,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,0],
        [0,0,0,1,0,0,0,0,1,0],
        [0,0,0,1,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,1,0],
        [0,0,1,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0,0,0]
    ]
]

var computerBordRandomNummer = Math.floor(Math.random()*5);
var spelerBordRandomNummer = Math.floor(Math.random()*5);

function isNietHetZelfdeBord() {
    if(computerBordRandomNummer == spelerBordRandomNummer) {
        spelerBordRandomNummer = Math.floor(Math.random()*5);
        isNietHetZelfdeBord();
    }
}

isNietHetZelfdeBord();

var computerBord = Borden[computerBordRandomNummer];

var spelerBord = Borden[spelerBordRandomNummer];

function knopDruk(x, y) {
    var alGeklikt = false;
    function tweeOfDrie() {
        alert('je hebt hier al geklikt  !');
        alGeklikt = true;
    }
    switch(computerBord[x][y]) {
        case 0:
            alert('je schoot mis  !');
            computerBord[x][y] += 2;
            break;
        case 1:
            alert('je schoot raak  !');
            computerBord[x][y] += 2;
            break;
        case 2:
            tweeOfDrie();
            break;
        case 3:
            tweeOfDrie();
            break;
    }

    if(!alGeklikt)
        computer();
    
    maakBord();
}

var laatsGezienGoed = [null, null];
var vorigLaatsGezienGoed = [null, null]
var richting = null;

function computer() {
    if(laatsGezienGoed[0] == null && laatsGezienGoed[1] == null) {
        var x = Math.floor(Math.random()*10);
        var y = Math.floor(Math.random()*10);
        computerZet(x,y);
    } else {
        var x = Math.floor(Math.random()*10);
        var y = Math.floor(Math.random()*10);

        if(richting == null) {
            if(
                typeof spelerBord[((laatsGezienGoed[0])-1)][laatsGezienGoed[1]] !== undefined && 
                spelerBord[laatsGezienGoed[0]-1][laatsGezienGoed[1]] < 2
            ) {
                x = laatsGezienGoed[0]-1;
                y = laatsGezienGoed[1];
                computerZet(x,y);
            } else {
                richting = 'rechts';
                computer();
            }
        } else if(richting == 'rechts') {
            if(
                typeof spelerBord[laatsGezienGoed[0]][((laatsGezienGoed[1])+1)] !== undefined && 
                spelerBord[laatsGezienGoed[0]][laatsGezienGoed[1]+1] < 2
            ) {
                x = laatsGezienGoed[0];
                y = laatsGezienGoed[1]+1;
                computerZet(x,y);
            } else {
                richting = 'onder';
                computer();
            }
        } else if(richting == 'onder') {
            if(
                typeof spelerBord[((laatsGezienGoed[0])+1)][laatsGezienGoed[1]] !== undefined && 
                spelerBord[laatsGezienGoed[0]+1][laatsGezienGoed[1]] < 2
            ) {
                x = laatsGezienGoed[0]+1;
                y = laatsGezienGoed[1];
                computerZet(x,y);
            } else {
                richting = 'links';
                computer();
            }
        } else if(richting == 'links') {
            if(
                typeof spelerBord[laatsGezienGoed[0]][((laatsGezienGoed[1])-1)] !== undefined && 
                spelerBord[laatsGezienGoed[0]][laatsGezienGoed[1]-1] < 2
            ) {
                x = laatsGezienGoed[0];
                y = laatsGezienGoed[1]-1;
                computerZet(x,y);
            } else {
                richting = null;
                laatsGezienGoed = [null, null];
            }
        }
    }
}

function computerZet(x,y) {
    switch(spelerBord[x][y]) {
        case 0:
            spelerBord[x][y] += 2;
            break;
        case 1:
            spelerBord[x][y] += 2;
            laatsGezienGoed = [x, y];
            break;
        case 2:
            computer();
            break;
        case 3:
            computer();
            break;
    }
}

function maakBord() {
    var scoreSpeler = 0;
    var bord = '';
    for(var i = 0; i < 10; i++) {
        for(var j = 0; j < 10; j++) {
            bord = bord + `<button class="knop s${spelerBord[i][j]}"></button>`;
            scoreSpeler += spelerBord[i][j] == 3 ? 1 : 0;
        }
    }

    $('#spelerVeld').html(bord);
    $('#spelerScore').html(scoreSpeler + '/15 geraakt');
    //------------------------------------------------------------------------------------------------
    var scoreComputer = 0;
    var bord = '';
    for(var i = 0; i < 10; i++) {
        for(var j = 0; j < 10; j++) {
            bord = bord + `<button class="knop knophover c${computerBord[i][j]}" onclick="knopDruk(${i}, ${j})"></button>`;
            scoreComputer += computerBord[i][j] == 3 ? 1 : 0;
        }
    }
    $('#computerVeld').html(bord);
    $('#computerScore').html(scoreComputer + '/15 geraakt');

    if(scoreSpeler == 15) {
        alert('you have verloren');
        location.reload();
    }
    if(scoreComputer == 15) {
        alert('you have gewonnen');
        location.reload();
    }
}

maakBord();