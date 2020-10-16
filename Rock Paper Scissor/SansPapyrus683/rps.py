import random

while True:
    input_ = input("how many rounds do you want to play for?\n")
    if not input_.isnumeric():
        print("that isn't a valid input!")
    else:
        rounds = int(input_)
        break

player_win = 0
machine_win = 0
for _ in range(rounds):
    machine_move = random.choice(list('rps'))
    while True:
        input_ = input("what's your move?\n")
        if input_ in ["rock", "r"]:
            move = "rock"
            if machine_move == "r":
                state = "tie"
            elif machine_move == "p":
                state = "lose"
            elif machine_move == "s":
                state = "win"

        if input_ in ["paper", "p"]:
            move = "paper"
            if machine_move == "r":
                state = "win"
            elif machine_move == "p":
                state = "tie"
            elif machine_move == "s":
                state = "lose"

        elif input_ in ["scissors", "s"]:
            move = "scissors"
            if machine_move == "r":
                state = "lose"
            elif machine_move == "p":
                state = "win"
            elif machine_move == "s":
                state = "tie"
        else:
            print("bruh that isn't a valid move")
            continue

        mmove_rep = {"r": "rock", "p": "paper", "s": "scissors"}[machine_move]
        if state == "win":
            player_win += 1
            print(f"you played {move} and the machine played {mmove_rep}- you won!")
        elif state == "lose":
            machine_win += 1
            print(f"you played {move} and the machine played {mmove_rep}- you lost (f)!")
        elif state == "tie":
            print(f"you played {move} and the machine played {mmove_rep}- it was a tie!")
        break

if player_win > machine_win:
    print(f"you won {player_win} out of {rounds} rounds, winning the game!")
elif machine_win > player_win:
    print(f"oh no! you only won {player_win} out of {rounds} rounds, losing the game!")
else:
    print("the game was a tie!")
