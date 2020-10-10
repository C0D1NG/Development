from random import randint
import math

class Gameatron:
	def __init__(self):
		self.__number = float("-inf")

	def speak(self, key):
		print()

	def read_int(self, prompt):
		result = None
		while result is None:
			text = input(prompt).strip()
			try:
				result = int(text)
			except ValueError:
				print("That doesn't look like a integer to me, pal.")
		return result

	def read_answer(self, prompt):
		result = None
		while True:
			text = input(prompt).strip().lower()
			if text == "y":
				return True
			elif text == "n":
				return False
			else:
				print("The instructions were quite simple. Now try again.")

	def init_game(self):
		print("I will choose an integer between 0 an upper bound entered by you.")
		while self.bound <= 0:
			self.bound = self.read_int("What upper bound would you like to play with? ")
			if self.bound < 0:
				print("Please choose a positive integer.")
				continue
			elif self.bound < 10:
				print("Wow, very lame. Let's play with 10 instead.")
				self.bound = 10
			elif self.bound >= 1000000:
				print("It was this or the scratch-offs huh?")
		# Get a random number
		self.__number = randint(0, self.bound)
		# Set the max guesses to the amount needed for binary search OR 15.
		self.max_guesses = math.min(math.ceil(math.log(self.bound, 2)) + 1, 15)
		print(f"Lets get started! You get {self.max_guesses} guesses.")

	def win(self, round_num):
		if (round_num == 1):
			print(f"Wow! Hole in one! That was a 1/{self.bound} chance!")
		else:
			print(f"Congrats! You won in {round_num} guesses :D.")

	def lose(self):
		print(f"Unfortunately, the machines win this one ;). The number was {self.__number}")

	def game(self):
		self.init_game()
		i = 0
		while i < self.max_guesses:
			i += 1
			guess = self.read_int("Give me your best shot: ")
			if guess == self.__number:
				self.win(i)
				return;
			print(f"Try again! Your guess was too {'high' if guess > self.__number else 'low'}.")
			print(f"You have {self.max_guesses - i} guesses left.")
		self.lose()

	def run(self):
		playing = True
		while playing:
			self.bound = -1
			self.game()
			playing = self.read_answer("Play again? (y/n) ")
		print("Thanks for playing!")

def main():
	gameatron = Gameatron()
	gameatron.run()

if __name__ == "__main__":
	main()