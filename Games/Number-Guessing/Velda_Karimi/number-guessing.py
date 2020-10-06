import random
num = random.randint(0, 50)

user_name = input("Hello, What's your name?")
num_of_guesses = 0
print('okay! '+ user_name+ ' I am Guessing a number between 0 and 50:')

while num_of_guesses < 5:
    guess = int(input())
    num_of_guesses += 1
    if guess < num:
        print('Your guess is too low')
    if guess > num:
        print('Your guess is too high')
    if guess == num:
        break
if guess == num:
    print('You guessed the number in ' + str(num_of_guesses) + ' tries!')
else:
    print('You did not guess the number, The number was ' + str(num))
    