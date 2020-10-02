#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int rand_interval(unsigned int min, unsigned int max)
{
    srand(time(NULL));
    return (rand() % (max + 1 - min)) + min;
}

int main()
{
    int i, j;
    char buf;
    printf("Generate a Random number between: i and j\n");
    printf("i: ");

    scanf("%d%c", &i, &buf);
    printf("j: ");
    scanf("%d", &j);

    int x = rand_interval(i, j);
    printf("%d\n", x);
}
