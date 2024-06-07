import inquirer from "inquirer"
const answers : {
    numberOne: number,
    numberTwo: number,
    Operator: string
} = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
    message: "Kindly enter your first number:" 
},
{
    type: "number",
    name: "numberTwo",
message: "Kindly enter your second number:" 
},
{
    type: "list",
    name: "Operator",
    choices: ["/","*","+","-"], 
message: "select operator: " 
},
]);

const {numberOne, numberTwo, Operator} = answers
if(numberOne && numberTwo && Operator) {
    let result: number = 0;
    if (Operator === "+"){
        result = numberOne + numberTwo
    } else if (Operator === "-"){
        result = numberOne - numberTwo
    } if (Operator === "*"){
        result = numberOne * numberTwo
    }
    if (Operator === "/"){

        result = numberOne / numberTwo
    }
    console.log("your result is:", result)
} else {
    console.log("kindly enter valid input")
}