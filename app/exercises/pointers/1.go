package main

import "fmt"

// REMOVE THIS TO MOVE TO NEXT EXERCISE

func noPointer(a int) {
	a = 2
}

func pointer(a *int) {
	*a = 2
}

func main() {
	a := 1

	// Run without changing
	// Then change to pointer function
	noPointer(a)

	fmt.Println(a)
}
