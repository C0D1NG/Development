var isX = true;
var isValid = false;
var cells = [];
var player = 1;
var computer = 0;
var currentPlayer = 1;
var result = "";
var intervalId;

$(document).ready(function () {
    $("#dialog").dialog({
        resizable: false,
        height: 160,
        modal: true,
        buttons: {
            "X": function () {
                isX = true;
                $(this).dialog("close");
                startGame();
            },
            "O": function () {
                isX = false;
                $(this).dialog("close");
                startGame();
            }
        }
    });
});

function startGame() {
    emptyCells();
    if (isX) {
        player = 1;
        computer = 0;
    } else {
        player = 0;
        computer = 1;
    }

    var rnd = Math.round(Math.random());
    if (rnd === 1) {
        currentPlayer = player;
    } else {
        currentPlayer = computer;
    }
    intervalId = setInterval(loop, 100);
}

function loop() {
    if (currentPlayer === player) {
        isValid = true;
    } else {
        computerMove();
        currentPlayer = player;
    }

    $(".cell").on("click", function () {
        if (isValid) {
            var sign = player === 0 ? "O" : "X";

            var i = $(this).attr("id")[1] - 1;
            var j = $(this).attr("id")[2] - 1;
            if (cells[i][j] === -1) {
                cells[i][j] = player;
                $(this).html(sign);
                isValid = false;
                if (!whoWon(cells)) {
                    currentPlayer = computer;
                }
            }
        }
    });

    var winner = whoWon(cells);
    if (winner) {
        if (winner === "computer") {
            alert("You Lost, Better Luck Next Time.");
        } else {
            alert("Congratulations! You Won.");
        }
        result = winner;
    }
    else if (isTableFull(cells)) {
        result = "Tie";
        alert("Its a tie");
    }
    if (result !== "") {
        clearInterval(intervalId);
        result = "";
        cells = [];
        clearTable();
        startGame();
    }
}


function isTableFull(cells) {
    for (var i in cells) {
        for (var j in cells[i]) {
            if (cells[i][j] === -1) {
                return false;
            }
        }
    }
    return true;
}

function whoWon(cells) {
    //horizontal match
    for (var i in cells) {
        if (cells[i][0] !== -1 &&
            cells[i][1] !== -1 &&
            cells[i][2] !== -1 &&
            cells[i][0] === cells[i][1] && cells[i][0] === cells[i][2]) {
            if (cells[i][0] === player) {
                return "player";
            }
            else {
                return "computer";
            }
        }
    }
    //vertical match
    for (var i in cells) {
        if (cells[0][i] !== -1 &&
            cells[1][i] !== -1 &&
            cells[2][i] !== -1 &&
            cells[0][i] === cells[1][i] && cells[0][i] === cells[2][i]) {
            if (cells[0][i] === player) {
                return "player";
            }
            else {
                return "computer";
            }
        }
    }

    //diagonal match
    if ((cells[0][0] !== -1 &&
        cells[1][1] !== -1 &&
        cells[2][2] !== -1 &&
        cells[0][0] === cells[1][1] && cells[0][0] === cells[2][2]) ||
            (cells[0][2] !== -1 &&
            cells[1][1] !== -1 &&
            cells[2][0] !== -1 &&
            cells[0][2] === cells[1][1] && cells[0][2] === cells[2][0])) {
        if (cells[1][1] === player) {
            return "player";
        }
        else {
            return "computer";
        }
    }

    return false;
}

function computerMove() {
    var arr = freeCells();
    var arr2 = bestMove();
    var sign = computer === 0 ? "O" : "X";
    var x = Math.round(Math.random() * arr.length);

    if (arr2.length >= 1) {
        var i = arr2[0];
        var j = arr2[1];
    } else if (arr.length >= 1) {
        var i = arr[x][0];
        var j = arr[x][1];
    }
    if ((arr.length >= 1 || arr2.length >= 1) && cells[i][j] === -1) {
        var a = parseInt(i) + 1;
        var b = parseInt(j) + 1;
        new Promise(function (resolve, reject) {
            $("#c" + a + b).html(sign);
            resolve();
        }).then(function () {
            cells[i++][j++] = computer;
        })
        return 0;
    }
}

function freeCells() {
    var arr = [];
    for (var i in cells) {
        for (var j in cells[i]) {
            if (cells[i][j] === -1) {
                arr.push([i, j]);
            }
        }
    }
    return arr;
}

function bestMove() {
    var computerInLine = 0;
    var playerInLine = 0;
    var a = 0;
    var maybe = null;
    //check rows
    for (var i in cells) {
        for (var j in cells[i]) {
            if (cells[i][j] !== -1) {
                if (cells[i][j] === computer) {
                    computerInLine++;
                } else {
                    playerInLine++;
                }
            } else {
                a = j;
            }
        }
        if (computerInLine === 2 && a !== 0) {
            return [i, a];
        } else if (playerInLine === 2 && a !== 0) {
            maybe = [i, a];
        }
        a = 0;
        computerInLine = 0;
        playerInLine = 0;
    }

    //check columns
    for (var j in cells) {
        for (var i in cells[i]) {
            if (cells[i][j] !== -1) {
                if (cells[i][j] === computer) {
                    computerInLine++;
                } else {
                    playerInLine++;
                }
            } else {
                a = i;
            }
        }
        if (computerInLine === 2 && a !== 0) {
            return [a, j];
        } else if (playerInLine === 2 && a !== 0) {
            maybe = [a, j];
        }
        a = 0;
        computerInLine = 0;
        playerInLine = 0;
    }

    //check diagonals
    var h = 0;
    a = -1;
    var b = -1;
    playerInLine = 0;
    computerInLine = 0;
    for (var k = 0; k < 3; k++) {
        if (cells[k][h] !== -1) {
            if (cells[k][h] === computer) {
                computerInLine++;
            } else {
                playerInLine++;
            }
        } else {
            a = k;
            b = h;
        }

        if (computerInLine === 2 && a !== -1 && b !== -1) {
            return [a, b];
        } else if (playerInLine === 2 && a !== -1 && b != -1) {
            maybe = [a, b];
        }

        h++;
    }

    h = 0;
    a = -1;
    b = -1;
    playerInLine = 0;
    computerInLine = 0;

    for (var k = 2; k >= 0; k--) {
        if (cells[k][h] !== -1) {
            if (cells[k][h] === computer) {
                computerInLine++;
            } else {
                playerInLine++;
            }
        } else {
            a = k;
            b = h;
        }

        if (computerInLine === 2 && a !== -1 && b !== -1) {
            return [a, b];
        } else if (playerInLine === 2 && a !== -1 && b != -1) {
            maybe = [a, b];
        }

        h++;
    }

    if (maybe !== null) return maybe;
    return [];
}

function clearTable() {
    for (var a = 1; a <= 3; a++) {
        for (var b = 1; b <= 3; b++) {
            $("#c" + a + b).html("");
        }
    }
}

function emptyCells() {
    for (var a = 0; a < 3; a++) {
        cells.push([-1, -1, -1]);
    }
}