package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"strconv"
	"strings"
)

const PROCEED_FLAG = "// REMOVE THIS TO MOVE TO NEXT EXERCISE"

type Problem struct {
	Solution string `json:"solution"`
}

type Concept struct {
	Concept  string    `json:"concept"`
	Total    int       `json:"total"`
	Problems []Problem `json:"problems"`
}

type JSON struct {
	Concepts []Concept `json:"concepts"`
	Total    int       `json:"total"`
}

func readFile(concept string, problem int) string {
	problemInt := strconv.Itoa(problem)

	dir := "../exercises/" + concept + "/" + concept + problemInt + ".go"
	rawCurr, err := ioutil.ReadFile(dir)

	if err != nil {
		panic(err)
	}

	curr := string(rawCurr)

	return curr
}

func checkCompleted(concept string, problem int) bool {
	file := readFile(concept, problem)
	return strings.Contains(file, PROCEED_FLAG)
}

func checkSolution() {
	var mainJSON JSON

	rawJson, err := ioutil.ReadFile("main.json")
	if err != nil {
		panic(err)
	}

	err2 := json.Unmarshal([]byte(string(rawJson)), &mainJSON)
	if err2 != nil {
		panic(err)
	}

	for concept := 0; concept < mainJSON.Total; concept++ {
		for problem := 0; problem < mainJSON.Concepts[concept].Total; problem++ {
			currConcept := mainJSON.Concepts[concept].Concept

			if checkCompleted(currConcept, problem+1) {
				fmt.Println(currConcept)
				fmt.Println(problem + 1)
			}
		}
	}
}

func main() {
	checkSolution()
}
