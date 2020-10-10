var current_player = 'Player1';
var gameStopped = false;
document.getElementById('player1').style.backgroundColor = 'red';
var count = 0;

var locations = document.getElementsByClassName('inter');

for (var i = 0; i < locations.length; i++) {
    locations[i].addEventListener('click', print);
    locations[i].addEventListener('mouseover', hovering);
    locations[i].addEventListener('mouseout', nothovering);
}

function hovering() {
    if (this.innerHTML == '') {
        this.style.backgroundColor = 'wheat';
    }
}

function nothovering() {
    this.style.backgroundColor = 'brown';
}

function print() {

    var current_location = this.id;
    if (gameStopped == false && document.getElementById(current_location).textContent == '') {

        count++;

        if (current_player === 'Player1') {
            document.getElementById(current_location).textContent = 'X';
            current_player = 'Player2';
            document.getElementById('player1').style.backgroundColor = 'white';
            document.getElementById('player2').style.backgroundColor = 'red';
        } else if (current_player === 'Player2') {
            document.getElementById(current_location).textContent = 'O';
            current_player = 'Player1';
            document.getElementById('player1').style.backgroundColor = 'red';
            document.getElementById('player2').style.backgroundColor = 'white';
        }

        for (var i = 0; i < 3; i++) {

            var xr1 = 0;
            var or1 = 0;

            var xc1 = 0;
            var oc1 = 0;
            for (var j = 0; j < 3; j++) {
                var contentRow = document.getElementById(`${i}${j}`).innerHTML;
                var contentColumn = document.getElementById(`${j}${i}`).innerHTML;

                if (contentRow == 'X') {
                    xr1++;
                } else if (contentRow == 'O') {
                    or1++;
                }
                if (xr1 == 3) {
                    winner('Player 1');
                    gameStopped = true;
                } else if (or1 == 3) {
                    winner('Player 2');
                    gameStopped = true;
                }

                if (contentColumn == 'X') {
                    xc1++;
                } else if (contentColumn == 'O') {
                    oc1++;
                }
                if (xc1 == 3) {
                    winner('Player 1');
                    gameStopped = true;
                } else if (oc1 == 3) {
                    winner('Player 2');
                    gameStopped = true;
                }
            }
        }


        var xl1 = 0;
        var ol1 = 0;

        var xr1 = 0;
        var or1 = 0;
        for (var i = 0; i < 3; i++) {

            for (var j = 0; j < 3; j++) {

                if (i == j) {
                    var contentLeft = document.getElementById(`${i}${j}`).innerHTML;
                    if (contentLeft == 'X') {
                        xl1++;
                    } else if (contentLeft == 'O') {
                        ol1++;
                    }
                    if (xl1 == 3) {
                        winner('Player 1');
                        gameStopped = true;
                    } else if (ol1 == 3) {
                        winner('Player 2');
                        gameStopped = true;
                    }
                }
                if (i + j == 2) {
                    var contentRight = document.getElementById(`${i}${j}`).innerHTML;
                    if (contentRight == 'X') {
                        xr1++;
                    } else if (contentRight == 'O') {
                        or1++;
                    }
                    if (xr1 == 3) {
                        winner('Player 1');
                        gameStopped = true;
                    } else if (or1 == 3) {
                        winner('Player 2');
                        gameStopped = true;
                    }
                }
            }
        }

        if (count == 9) {
            winner("draw");
        }

    }
}

function winner(text) {
    if (text === "draw") {
        document.getElementById('announcement').innerHTML = `Match Draw!!!`;
    } else {
        document.getElementById('announcement').innerHTML = `${text} WON THE GAME!!!`;
    }

    document.getElementById('player1').style.backgroundColor = 'yellow';
    document.getElementById('player2').style.backgroundColor = 'yellow';
}