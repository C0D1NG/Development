package main

import (
	"fmt"
	"math/rand"
	"time"
)

// returns a random number between min and max
func randomInt(min, max int) int {
	rand.Seed(time.Now().UnixNano())
	return min + rand.Intn(max-min)
}

func main() {
	fmt.Println(randomInt(5, 20))
	fmt.Println(randomInt(0, 100))
	fmt.Println(randomInt(-50, -20))
	fmt.Println(randomInt(1000, 2000))
}
