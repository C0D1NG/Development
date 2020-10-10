# Simple battleship game
# 1 hit 1 kill
# 4 guesses to figure out where the battleship is

from random import randint
board = []

## Sets the size of the board. range(5) gives a 5x5 board
for x in range(5):
    board.append(["O"] * 5)
def print_board(board):
    for row in board:
        print " ".join(row)

## Game start. Print the initial board
print "Let's play Battleship!"
print "Rows and Columns are between 1 and 5"
print "You have 4 turns to try and win"
print_board(board)

## Randomly assign a position to be the battleship

ship_row = randint(0, len(board) - 1)
ship_col = randint(0, len(board[0]) - 1)

## Start turn
## Prompt user for a row and column choice. There are 4 turns
## Subtracting 1 so that the user can start with row 1 instead of row 0
for turn in range(4):
    guess_row = int(raw_input("Guess Row:")) - 1
    guess_col = int(raw_input("Guess Col:")) - 1
## If they guess right, game over. They win.
    if guess_row == ship_row and guess_col == ship_col:
        print "Congratulations! You sunk my battleship!"
        break
## Sanity check. Make sure the guess is on the board, and not already guessed.
    else:
        if (guess_row < 0 or guess_row > 4) or (guess_col < 0 or guess_col > 4):
            print "Oops, that's not even in the ocean."
            print ""
        elif(board[guess_row][guess_col] == "X"):
            print "You guessed that one already."
            print ""
## Misses. Mark the guess on the board.
        else:
            print "You missed my battleship!"
            print ""
            board[guess_row][guess_col] = "X"
## Increment the turn and print the new board
    print "Turn", turn + 2
    print_board(board)
print "Game Over."
print "My battleship was at row",ship_row + 1,", column",ship_col + 1
print ""
