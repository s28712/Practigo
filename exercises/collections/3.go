package main

import "fmt"

// REMOVE THIS TO MOVE TO NEXT EXERCISE

func main() {
	m := make(map[string]int)

	m["k1"] = 1
	m["k2"] = 2

	delete(m, "k2")

	// Make k2 of m equal 9

	fmt.Println(m["k2"])
}
