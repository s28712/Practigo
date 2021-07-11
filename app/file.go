package main

import (
	"io/ioutil"
	"strconv"
)

func ReadFile(concept string, problem int) string {
	problemInt := strconv.Itoa(problem)

	dir := "exercises/" + concept + "/" + problemInt + ".go"
	rawCurr, err := ioutil.ReadFile(dir)

	if err != nil {
		panic(err)
	}

	curr := string(rawCurr)

	return curr
}
