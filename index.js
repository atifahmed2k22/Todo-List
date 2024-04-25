#! /usr/bin/env node
import inquirer from "inquirer";
let tasks = [];
let condition = true;
while (condition) {
    let answer = await inquirer.prompt([
        {
            name: "addTodos",
            type: "input",
            message: "What you want to do add in your todos?",
        },
        {
            name: "addMoreTodos",
            type: "confirm",
            message: "Do you want to add more todos?",
            default: "false",
        },
    ]);
    tasks.push(answer.addTodos);
    condition = answer.addMoreTodos;
    console.log(tasks);
}
