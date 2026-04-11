import java.util.Arrays;
import java.util.Scanner;

public class CliTicTacToe {
    static String ERR_MSG_INVALID_MOVE = "Enter a valid Integer Value Number in Matrix form within 1,1 to 3,3";
    static String ERR_MSG_SQUARE_ALREADY_OCCUPIED = "This Place is Already Occupied.";

    public static void main(String[] args) {
        char[][] board = new char[3][3];
        int[][] boardPlaces = { { 1, 1 }, { 1, 2 }, { 1, 3 }, { 2, 1 }, { 2, 2 }, { 2, 3 }, { 3, 1 }, { 3, 2 },
                { 3, 3 } };
        int[][] enteredPlaces = new int[9][2];

        int turns = 0;
        char player = 'X';
        System.out.println("Default Board :");
        setBoard(board);

        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("Player " + player);
            System.out.print("Enter the Square number, in matrix form, you want to place your pattern : ");

            String userInput = sc.nextLine();
            try {
                String[] placeInArrayString = userInput.split(",");
                if (placeInArrayString.length != 2)
                    throw new OutOfBoundError(CliTicTacToe.ERR_MSG_INVALID_MOVE);
                int[] placeInIntArray = new int[2];
                for (int i = 0; i < placeInArrayString.length; i++) {
                    placeInIntArray[i] = Integer.parseInt(placeInArrayString[i]);
                }
                if (placeInIntArray[0] < 1 || placeInIntArray[0] > 3)
                    throw new OutOfBoundError(CliTicTacToe.ERR_MSG_INVALID_MOVE);
                if (placeInIntArray[1] < 1 || placeInIntArray[1] > 3)
                    throw new OutOfBoundError(CliTicTacToe.ERR_MSG_INVALID_MOVE);

                String tempPlace = Arrays.toString(placeInArrayString);

                for (int[] i : boardPlaces) {
                    if (Arrays.toString(i).equals(tempPlace)) {
                        for (int[] j : enteredPlaces) {
                            if (Arrays.toString(j).equals(tempPlace))
                                throw new AlreadyExistingError(CliTicTacToe.ERR_MSG_SQUARE_ALREADY_OCCUPIED);
                        }
                        enteredPlaces[turns] = placeInIntArray;
                        board[placeInIntArray[0] - 1][placeInIntArray[1] - 1] = player;
                        break;
                    }
                }
            } catch (OutOfBoundError e) {
                System.out.println(e.getMessage());
                continue;
            } catch (AlreadyExistingError e) {
                System.out.println(e.getMessage());
                continue;
            } catch (NumberFormatException e) {
                System.out.println(CliTicTacToe.ERR_MSG_INVALID_MOVE);
                continue;
            }

            printBoard(board);
            turns++;

            if (ifWon(board)) {
                System.out.println("Player " + player + " wins.");
                break;
            } else if (turns == 9) {
                System.out.println("DRAW !");
                break;
            }

            player = (turns % 2 == 0) ? 'X' : 'O';
        }

        sc.close();
    }

    public static void setBoard(char[][] board) {
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[i].length; j++) {
                board[i][j] = ' ';
            }
        }
        for (int i = 1; i <= 9; i++) {
            if (i % 3 == 0 && i != 9) {
                System.out.println("___|___|___");
            } else {
                System.out.println("   |   |   ");
            }
        }
    }

    public static void printBoard(char[][] board) {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 1; j++) {
                System.out.println("   |   |   ");
                System.out.println(" " + board[i][j] + " | " + board[i][j + 1] + " | " + board[i][j + 2]);
                if (i != 2) {
                    System.out.println("___|___|___");
                } else {
                    System.out.println("   |   |   ");
                }
            }
        }
    }

    public static boolean ifWon(char[][] board) {
        if (((board[0][0] == board[0][1] && board[0][1] == board[0][2])
                && (board[0][0] == 'X' || board[0][0] == 'O'))
                || ((board[1][0] == board[1][1] && board[1][1] == board[1][2])
                        && (board[1][0] == 'X' || board[1][0] == 'O'))
                || ((board[2][0] == board[2][1] && board[2][1] == board[2][2])
                        && (board[2][0] == 'X' || board[2][0] == 'O'))) {
            return true;
        } else if (((board[0][0] == board[1][0] && board[1][0] == board[2][0])
                && (board[0][0] == 'X' || board[0][0] == 'O'))
                || ((board[0][1] == board[1][1] && board[1][1] == board[2][1])
                        && (board[0][1] == 'X' || board[0][1] == 'O'))
                || ((board[0][2] == board[1][2] && board[1][2] == board[2][2])
                        && (board[0][2] == 'X' || board[0][2] == 'O'))) {
            return true;
        } else if (((board[0][0] == board[1][1] && board[1][1] == board[2][2])
                && (board[0][0] == 'X' || board[0][0] == 'O'))
                || ((board[0][2] == board[1][1] && board[1][1] == board[2][0])
                        && (board[0][2] == 'X' || board[0][2] == 'O'))) {
            return true;
        } else {
            return false;
        }
    }
}

class OutOfBoundError extends Exception {
    public OutOfBoundError(String message) {
        super(message);
    }
}

class AlreadyExistingError extends Exception {
    public AlreadyExistingError(String message) {
        super(message);
    }
}