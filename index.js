let homeTotalScore = document.getElementById('home-score');
let homeScore = 0;

let guestTotalScore = document.getElementById('guest-score');
let guestScore = 0;
function homeAdd1pt(){
   homeScore += 1;
   homeTotalScore.textContent = homeScore;
}

function homeAdd2pt(){
    homeScore += 2;
    homeTotalScore.textContent = homeScore; 
}

function homeAdd3pt(){
    homeScore += 3;
    homeTotalScore.textContent = homeScore;
}

function guestAdd1pt(){
    guestScore += 1;
    guestTotalScore.textContent = guestScore;
}

function guestAdd2pt(){
    guestScore += 2;
    guestTotalScore.textContent = guestScore;
}

function guestAdd3pt(){
    guestScore += 3;
    guestTotalScore.textContent = guestScore;
}