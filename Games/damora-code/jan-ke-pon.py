from random import randint
#ISSUE WITH COUNTER WITH KEEPING TRACK OF POINTS POINT SYSTEM IS KEPT INSIDE BLOCK MOVE OUTWARDS
#possible ref = https://www.reddit.com/r/learnpython/comments/741rcm/keeping_score_for_rock_paper_scissors/

#list of play options
pon = ["Scissors", "Rock", "Paper", "exit"]

#how computer will select from the pon dictionary
computer = pon[randint(0,2)] 

#keeps track of score
player_count = 0
computer_count = 0

#set while loop will work
player = False

#hello message
print('''Welcome to Jan-Ken-Po!

If you ever feel like not playing type "exit" 
''')

while player == False:
#set player to True with input
    player = input("Rock, Paper, Scissors? ")
    if player == computer:
        print("Tie.")
        print(player_count,computer_count)
    elif player == "Rock":
        if computer == "Paper":
            print("You lose!", computer, "covers", player)
            computer_count =+ 1
            print(player_count, computer_count)
        else:
            print("You win!", player, "smashes", computer)
            player_count =+ 1
            print(player_count, computer_count)
    elif player == "Paper":
        if computer == "Scissors":
            print("You lose!", computer, "cuts", player)
            computer_count =+ 1
            print(player_count, computer_count)
        else:
            print("You win!", player, "covers", computer)
            player_count =+ 1
            print(player_count, computer_count)
    elif player == "Scissors":
        if computer == "Rock":
            print("You lose!", computer, "smashes", player)
            computer_count =+ 1
            print(player_count, computer_count)
        else: 
            print("You win!", player, "cuts", computer)
            player_count =+ 1
            print(player_count, computer_count)
    elif player == "Exit":
        print(f"Final score --" " player: " + str(player_count) + " computer:" + str(computer_count))
        print("""
        
        Thanks for playing!""")
        break
    else:
        print("Invalid play, check spelling")
    player = False
    computer = pon[randint(0,2)]
