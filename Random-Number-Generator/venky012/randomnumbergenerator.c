#include <stdio.h> 
#include <stdlib.h> 
#include <time.h> 
  
int main() 
{ 
    int lower = 1, upper = 7, count = 1; 

    srand(time(0)); 
    
    printf("%d ", rand() % (upper - lower + 1) + lower); 
    return 0; 
}