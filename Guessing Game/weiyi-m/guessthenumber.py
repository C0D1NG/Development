import random

y = int(input("What is the range of numbers? (e.g. if you want the random number to be 1-50, type 50.) "))

the_number = random.randint(1, y)

print("I'm thinking of a number between 1 and " + str(y) + "...")
print("You only get 3 chances to guess the number I'm thinking of, so choose wisely!")

guesses = []
for i in range(3):
    guesses.append(int(input("What is your guess? ")))

    if guesses[i] == the_number:
        print("You win! You guessed the number!")
        break
    else:
        print("That's wrong. Try again.")
