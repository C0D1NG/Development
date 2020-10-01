import time


def countdown(t):

    while t > 0:
        mins, secs = divmod(t, 60)
        print('{:02d}:{:02d}3'.format(mins, secs))
        time.sleep(1)
        t -= 1

    print('Stop')


t = int(input("Enter the time (sec): "))
countdown(t)