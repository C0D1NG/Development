from random import seed
from random import randint

def randnum_generator():
    seed(1)
    for i in range(100):
        value = randint(1, 100)
        return value

print("Hello and welcome to Guess My Num!")
print("The rules are simple, I am thinking of a number between 1 and 100.\nGuess it correctly and you win!")

num = randnum_generator()
guess = int(input("Guess the number: "))
while guess != num:
    if guess > num:
        guess = int(input("Too high! Try again: "))
    elif guess < num:
        guess = int(input("Too low! Try again: "))
print("Congrats! You guessed my number!")