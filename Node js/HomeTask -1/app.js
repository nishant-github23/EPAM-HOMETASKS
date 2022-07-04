const process = require('process');
const exceed_args = "exceeding arguments"

function calculation(operator, operandsArray) {
    if (operator === 'addition') {
    return operandsArray.reduce((previousSum, currentOperand) => previousSum + parseInt(currentOperand), 0);
    }

    if (operator === "subtraction") {
        if (operandsArray.length > 2) {
            return exceed_args;
        }
        return operandsArray[0] - operandsArray[1];
    }

    if (operator === "multiplication") {
        return operandsArray.reduce((previousSum, currentOperand) => previousSum * parseInt(currentOperand), 1);
    }

    if (operator === "division") {
        if (operandsArray.length > 2) {
            return exceed_args;
        }
        return operandsArray[0] - operandsArray[1];
    }
    return "no valid operation found";

}

const parts = process.argv.slice(2);
console.log(calculation(parts[0], parts.slice(1)));