#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int generateRandomNumber(int n)
{
    srand(time(NULL));
    return rand() % n;
}

int greater(char c1, char c2)
{
    if (c1 == c2)
        return -1;
    else if (c1 == 'r' && c2 == 's')
        return 1;
    else if (c2 == 'r' && c1 == 's')
        return 0;
    else if (c1 == 'p' && c2 == 'r')
        return 1;
    else if (c2 == 'p' && c1 == 'r')
        return 0;
    else if (c1 == 's' && c2 == 'p')
        return 1;
    else if (c2 == 's' && c1 == 'p')
        return 0;
}

int main()
{
    int playerScore = 0, compScore = 0, temp;
    char playerChar, compChar;
    char dict[] = {'r', 'p', 's'};
    printf("Welcome to the Rock Paper Scissors\n");
    for (int i = 0; i < 3; i++)
    {
        printf("Press 1 for Rock, Press 2 for Paper, Press 3 for Scissors\n\n");
        printf("Player's turn: ");
        scanf("%d", &temp);
        getchar();
        playerChar = dict[temp - 1];
        printf("\nYou choose: %c\n", playerChar);
        printf("Press 1 for Rock, Press 2 for Paper, Press 3 for Scissors\n\n");
        printf("\nComputer's turn\n");
        temp = generateRandomNumber(3) + 1;
        compChar = dict[temp - 1];
        printf("\nComputer choose: %c\n", compChar);
        if (greater(compChar, playerChar) == 1)
        {
            compScore++;
            printf("Computer Got It!\n\n");
        }
        else if (greater(compChar, playerChar) == -1)
        {
            compScore++;
            playerScore++;
            printf("It's a draw. Both got 1 point!\n\n");
        }
        else
        {
            playerScore++;
            printf("You Got It!\n\n");
        }
        printf("\nYou: %d\n", playerScore);
        printf("Computer: %d\n", compScore);
    }
    printf("\nFinal Score\n");
    printf("You: %d\n", playerScore);
    printf("Computer: %d\n", compScore);
    if (playerScore > compScore)
        printf("\nYou Win the match\n");
    else if (playerScore < compScore)
        printf("\nComputer Win the match\n");
    else
        printf("\nIt's a draw\n");
    return 0;
}
