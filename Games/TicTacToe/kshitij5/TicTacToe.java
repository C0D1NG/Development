import java.util.Random;
import java.util.Scanner;
import java.util.Arrays;
import java.util.InputMismatchException;

public class TicTacToe {
    static Scanner in;
    static String[] board;
    static String turn;
    static int opponent;
    static int symbol;
    static String winner = null;

    public static void main(String[] args) {

        in = new Scanner(System.in);
        board = new String[9];

        populateEmptyBoard();

        System.out.println("    ------------------------------------");
        System.out.println(">>>>   Welcome to Tic Tac Toe Game.   <<<<");
        System.out.println("    ------------------------------------");

        do {
            System.out.println("Choose your Opponent :\n o> Computer (Press 1)\n o> Human (Press 2)");
            opponent = in.nextInt();
        } while (opponent > 2 && opponent < 0);

        if (opponent == 1) {
            do {
                System.out.println("Choose your Sign :\n o> X (Press 1)\n o> O (Press 2)");
                symbol = in.nextInt();
                turn = symbol == 1 ? "X" : "O";
                System.out.println(symbol);
            } while ((symbol != 1 && symbol != 2));
        }

        System.out.println("Preparing board......");
        printBoard();

        if (opponent == 1)
            ComputerOpponent();
        else
            HumanOpponent();

    }

    /// Function which lets player play against computer
    static int ComputerOpponent() {
        Random rand = new Random();
        int bot_turn = 0;

        while (winner == null) {
            if (symbol == 1) {
                System.out.println("Your turn :");
                int numInput;
                try {
                    numInput = in.nextInt();
                    if (!(numInput > 0 && numInput <= 9)) {
                        System.out.println("Invalid input\nRe-enter slot number:");
                        continue;
                    }
                } catch (InputMismatchException e) {
                    System.out.println("Invalid input\nRe-enter slot number:");
                    continue;
                }
                if (board[numInput - 1].equals(String.valueOf(numInput))) {
                    board[numInput - 1] = turn;
                    printBoard();
                    winner = checkWinner();
                } else {
                    System.out.println("Slot already taken\nRe-enter slot number:");
                    continue;
                }
                symbol = 2;
                continue;
            }

            if (symbol == 2) {
                System.out.println("Bot's turn......");
                do {
                    bot_turn = rand.nextInt(7) + 1;
                } while (!board[bot_turn - 1].equals(String.valueOf(bot_turn)));
                board[bot_turn - 1] = turn == "O" ? "X" : "O";
                symbol = 1;
            }

            System.out.println("Bot's checked at slot :" + bot_turn);
            printBoard();
            winner = checkWinner();
        }
        winner = winner == turn ? "User" : "Computer";
        dispWinner();
        return 0;
    }

    /// Function which lets two player play against each other
    static int HumanOpponent() {
        turn = "X";
        while (winner == null) {
            int numInput;
            System.out.println(turn + "'s turn.....\nEnter a slot number to place in:");
            try {
                numInput = in.nextInt();
                if (!(numInput > 0 && numInput <= 9)) {
                    System.out.println("Invalid input\nre-enter slot number:");
                    continue;
                }
            } catch (InputMismatchException e) {
                System.out.println("Invalid input\nRe-enter slot number:");
                continue;
            }
            if (board[numInput - 1].equals(String.valueOf(numInput))) {
                board[numInput - 1] = turn;
                if (turn.equals("X")) {
                    turn = "O";
                } else {
                    turn = "X";
                }
                printBoard();
                winner = checkWinner();
            } else {
                System.out.println("Slot already taken\nRe-enter slot number:");
                continue;
            }
        }
        dispWinner();
        return 0;
    }

    /// Function for showing Winner message
    static void dispWinner() {
        if (winner.equalsIgnoreCase("draw")) {
            System.out.println("It's a draw! Thanks for playing.");
        } else {
            System.out.println("Congratulations! " + winner + "'s have won!\nThanks for playing.");
        }
    }

    /// Function checks for winner at each iteration
    static String checkWinner() {
        for (int a = 0; a < 8; a++) {
            String line = null;
            switch (a) {
                case 0:
                    line = board[0] + board[1] + board[2];
                    break;
                case 1:
                    line = board[3] + board[4] + board[5];
                    break;
                case 2:
                    line = board[6] + board[7] + board[8];
                    break;
                case 3:
                    line = board[0] + board[3] + board[6];
                    break;
                case 4:
                    line = board[1] + board[4] + board[7];
                    break;
                case 5:
                    line = board[2] + board[5] + board[8];
                    break;
                case 6:
                    line = board[0] + board[4] + board[8];
                    break;
                case 7:
                    line = board[2] + board[4] + board[6];
                    break;
            }
            if (line.equals("XXX")) {
                return "X";
            } else if (line.equals("OOO")) {
                return "O";
            }
        }

        for (int a = 0; a < 9; a++) {
            if (Arrays.asList(board).contains(String.valueOf(a + 1))) {
                break;
            } else if (a == 8)
                return "draw";
        }
        return null;
    }

    /// Populates the initial empty board with slot numbers
    static void populateEmptyBoard() {
        for (int a = 0; a < 9; a++) {
            board[a] = String.valueOf(a + 1);
        }
    }

    /// Prints boards for each input
    static void printBoard() {
        System.out.println(" ___________ ");
        System.out.println("| " + board[0] + " | " + board[1] + " | " + board[2] + " |");
        System.out.println("|-----------|");
        System.out.println("| " + board[3] + " | " + board[4] + " | " + board[5] + " |");
        System.out.println("|-----------|");
        System.out.println("| " + board[6] + " | " + board[7] + " | " + board[8] + " |");
        System.out.println(" ¯¯¯¯¯¯¯¯¯¯¯ ");
    }
}
