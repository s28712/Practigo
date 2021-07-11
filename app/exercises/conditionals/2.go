package main

// REMOVE THIS TO MOVE TO NEXT EXERCISE

import "fmt"

// We will discuss this syntax later
func function(a int, b int) {
	if a > b {
		fmt.Println("Correct")
	} else {
		fmt.Println("Incorrect")
	}
}

func main() {
	// Inside the () of function, make it such that Correct is printed
	fmt.Println(function())
}
