import random

#below function generates randon no. between a zero and one
def rand_zero_one():    
    n = random.random()
    print(n)

#below function generates randon no. between a given range
def rand_range():
    n = random.randint(20,30)
    print(n)

rand_zero_one()
rand_range()
