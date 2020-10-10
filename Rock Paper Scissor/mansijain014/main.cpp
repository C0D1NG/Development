#include <iostream>
#include <cmath>
#include <cstdlib>
using namespace std;

int main(){

    char ch;
    int wins = 0,tie = 0,lose = 0;
    do{
    int choice;
    cout << "\n---Rock---Paper---Scissors---";
    cout << "\nRock:1, Paper:2, Scissors:3"<<"\n";
    cin >> choice;
    int comp = rand() % 3 + 1;
    cout <<  "\nThe computer chose: " << comp<<"\n";
    if(choice == 1 && comp == 1){
         cout << "Rock-Rock its a tie!" << endl;
         tie++;
         }
    else if(choice ==1 && comp== 2){
         cout << "Rock-Paper the computer wins!." << endl;
         lose++;
         }
    else if(choice == 1 && comp == 3){
         cout << "Rock-Scissors you win!" << endl;
         wins++;
         }
    else if(choice == 2 && comp == 1){
         cout << "Paper-Rock you win!" << endl;
         wins++;
         }
    else if(choice == 2 && comp == 2){
         cout << "Paper-Paper its a tie!" << endl;
         tie++;
         }
    else if(choice == 2 && comp == 3){
         cout << "Paper-Scissors the computer wins!" << endl;
         lose++;
         }
    else if( choice == 3 && comp == 1){
         cout << "Scissors-Rock computer wins!" << endl;
         lose++;
         }
    else if( choice == 3 && comp == 2){
         cout << "Scissors-Paper you win!" << endl;
         wins++;
         }
    else if(choice == 3 && comp == 3){
         cout << "Scissors-Scissors its a tie!" << endl;
         tie++;
         }
    else
         cout << "Wrong Choice!!" << endl;

         cout << "Wins: " << wins << endl;
         cout << "Ties:" << tie << endl;
         cout << "Losses:" << lose << endl;
         cout << "Would you like to play again? Y/N" << endl;
         cin >> ch;
         }while(ch == 'Y' || ch == 'y');
    return 0;

}