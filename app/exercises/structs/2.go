package main

import "fmt"

// REMOVE THIS TO MOVE TO NEXT EXERCISE

// Create struct Rectangle
// With width and height (integers)

func (r Rectangle) area() int {
	return r.width * r.height
}

func main() {
	rect := Rectangle{width: 3, height: 4}
	fmt.Println(rect.area())
}
