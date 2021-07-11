package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"strings"
)

const PROCEED_FLAG = "// REMOVE THIS TO MOVE TO NEXT EXERCISE"

func checkCompleted(concept string, problem int) bool {
	file := ReadFile(concept, problem)
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
		currConcept := mainJSON.getConcept(concept)

		for problem := 0; problem < currConcept.Total; problem++ {
			currProblem := currConcept.getProblem(problem)

			if checkCompleted(currConcept.Concept, problem+1) {
				currProblem.compileAndRun(currConcept.Concept, problem+1)
				return
			}
		}
	}

	fmt.Println(GREEN, "Congrats! You finished Practigo!")
}

func main() {
	checkSolution()
}
