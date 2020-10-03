package main

import (
	"bufio"
	"fmt"
	"log"
	"math/rand"
	"os"
	"strconv"
	"strings"
)

//CLI number guessing game
var attempts []int

func main() {

	min := 1
	max := 100
	random := rand.Intn(max-min) + min

	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter a number between 1 to 100")

	for {
		entry, err := reader.ReadString('\n')
		if err != nil {
			log.Fatal(err)
		}

		line := strings.Fields(entry)[0]

		num, err := strconv.Atoi(line)

		attempts = append(attempts, num)
		if err != nil || (num < 1 || num > 100) {
			fmt.Println("Bro, enter an integer between 1 and 100")
		} else if random-5 <= num && num < random {
			fmt.Println("you are damn close from the left")
		} else if random-10 <= num && num < random-5 {
			fmt.Println("you are very close from the left")
		} else if random-20 <= num && num < random-10 {
			fmt.Println("you are close from the left")
		} else if num < random-20 {
			fmt.Println("you are far away from the left")
		} else if random+5 >= num && num > random {
			fmt.Println("you are damn close from the right")
		} else if random+10 >= num && num > random+5 {
			fmt.Println("you are very close from the right")
		} else if random+20 >= num && num > random+10 {
			fmt.Println("you are somewhat close from the right")
		} else if num > random+20 {
			fmt.Println("you are way far from the right")
		} else if random == num {
			fmt.Println("you got it bro. Number of attempts: ", len(attempts))
			break
		}
	}

}
