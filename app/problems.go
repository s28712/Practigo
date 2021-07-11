package main

import (
	"fmt"
	"os/exec"
	"strconv"
)

const RED = "\033[31m"
const YELLOW = "\033[33m"
const RESET = "\033[0m"
const GREEN = "\033[32m"

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

func (j JSON) getConcept(idx int) Concept {
	return j.Concepts[idx]
}

func (c Concept) getProblem(idx int) Problem {
	return c.Problems[idx]
}

func (p Problem) compileAndRun(concept string, problem int) {
	app := "go"
	arg0 := "run"

	problemInt := strconv.Itoa(problem)
	dir := "exercises/" + concept + "/" + problemInt + ".go"
	fmt.Println(YELLOW, "Compiling", dir)
	fmt.Printf("\n")

	cmd := exec.Command(app, arg0, dir)
	stdout, stderr := cmd.Output()

	if stderr != nil {
		fmt.Println(RED, stderr.Error())
		fmt.Println(RED, "Compilation error")
		return
	} else if string(stdout) == p.Solution {
		fmt.Println(RESET, string(stdout))
		fmt.Println(GREEN, "Correct!\n Please remove the \"// REMOVE THIS TO MOVE TO NEXT EXERCISE\" line\n in the file to move to next problem")
	} else {
		fmt.Println(RESET, string(stdout))
		fmt.Println(RED, "Incorrect output, please try again")
	}
}
