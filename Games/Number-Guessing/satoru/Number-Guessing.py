import random
def random_num_gen():
    return random.randint(0,10)

if __name__ == "__main__":
    num = int(input("Enter a random number b/w 0-10 :"))
    print("yay!") if(num==random_num_gen()) else print("Guesses are not always right!")