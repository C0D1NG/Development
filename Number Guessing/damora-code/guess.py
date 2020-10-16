import random
number = random.randint(1,10)

player_name= input("Hello, what's you're name ")
number_of_guesses = 0
print('Okay! '+ player_name+ ' I am Guessing a number between 1 and 10:')

while number_of_guesses < 5:
    guess = int(input())
    number_of_guesses += 1
    if guess < number:
        print('Your guess is too low')
    if guess > number:
        print('Your guess is too high')
    if guess == number:
        break
if guess == number: 
    print('Congratulations, ' + player_name + ' you guessed the number in ' + str(number_of_guesses) + ' tries!')
else:
    print('You did not guess the number ' + player_name + ', it was ' + str(number) )
