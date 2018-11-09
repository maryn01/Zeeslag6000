/**
 * 0 = leeg
 * 1 = boot
 * 2 = leeg geschoten
 * 3 = boot geschoten
 */

//De verschillende borden die aan het begin van het spel random worden gekozen voor zowel de computer als de speler.
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
//functie om voor beide partijen een bord te kiezen, waarbij ze niet beide hetzelfde bord mogen hebben
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

//geeft foutmelding zodra op een vakje word geklikt die al eerder aangeklikt is.
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
//extra functie om de computer nog een beetje moeilijkheid te geven.
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
//functie die aangeeft wanneer de computer een zet mag doen.
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
//functie die de borden maakt, coordinaten aan de knoppen geeft.
function maakBord() {
    var scoreSpeler = 0;
    var bord = '';
    for(var i = 0; i < 10; i++) {
        for(var j = 0; j < 10; j++) {
            bord = bord + `<button class="knop s${spelerBord[i][j]}"></button>`;
            scoreSpeler += spelerBord[i][j] == 3 ? 1 : 0;
        }
    }
//zorgt ervoor dat de hoeveelheid score correct word weergegeven.
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
//einde spel + reset van het spel.
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
