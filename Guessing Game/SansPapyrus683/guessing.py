import random

actual = random.randint(1, 101)  # inclusive, exclusive

players = int(input("how many people are playing? "))
print("i'm thinking of a number between 1 and 100...")
guesses = []
for i in range(1, players + 1):
    guesses.append(int(input(f"what's player {i}'s guess? ")))

closest = min([abs(g - actual) for g in guesses])
winners = []
for v, g in enumerate(guesses):
    if abs(g - actual) == closest:
        winners.append(str(v + 1))

if len(winners) == 1:
    print(f"player {winners[0]} won!")
else:
    won = ", ".join(winners[:-1])
    won += f" and {winners[-1]}"
    print(f"players {won} were equally close!")
print(f"oh and by the way the number was {actual}")
