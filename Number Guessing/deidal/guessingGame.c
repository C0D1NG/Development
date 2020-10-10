//number guessing game in C

#include<stdio.h>
#include <stdlib.h>
#include<time.h>

int main()
{
    time_t t;
    int computerNum, guess, tries;

    srand((unsigned) (&t));

    puts("Welcome to the GUESS THE NUMBER Game");

    computerNum = rand()%100 + 1;

    tries = 1;

    printf("\nWhat number am I thinking of? \nTake a guess: ");
    scanf("%d", &guess);

    while(guess != computerNum)
    {
        if(guess > computerNum)
            puts("Lower...");
        else
            puts("Higher...");
        printf("Take a guess: ");
        scanf("%d", &guess);

        tries = tries + 1;
    }

    printf("You guessed right! The number is %d\n.", computerNum);
    printf("It took you %d tries to guess it correctly.\n", tries);

    return 0;

}
