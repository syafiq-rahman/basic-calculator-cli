"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter first number: ');
    var operator = (0, readline_sync_1.question)('Enter operator: ');
    var secondStr = (0, readline_sync_1.question)('Enter second number: ');
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (!validInput) {
        console.log('\nInvalid Input!\n');
        main();
    }
    var firstNum = parseInt(firstStr);
    var secondNum = parseInt(secondStr);
    var result = calculate(firstNum, operator, secondNum);
    console.log("".concat(firstNum, " ").concat(operator, " ").concat(secondNum, " = ").concat(result));
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str); // 33 NaN
    var isNum = !isNaN(maybeNum);
    return isNum;
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
main();
