package main

import "fmt"

// REMOVE THIS TO MOVE TO NEXT EXERCISE

func main() {
	var slice []int

	for i := 0; i < 5; i++ {
		slice = append(slice, i)
	}

	// Append to slice such that [5] is 5

	fmt.Println(slice[5])
}
