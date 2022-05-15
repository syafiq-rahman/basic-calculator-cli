import { question } from 'readline-sync';

type Operator = '+' | '-' | '*' | '/';

function main(): void
{
    const firstStr: string = question('Enter first number: ');
    const operator: string = question('Enter operator: ');
    const secondStr: string = question('Enter second number: ');

    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

    if (!validInput) 
    {
        console.log('\nInvalid Input!\n');
        main();
    }

    const firstNum: number = parseInt(firstStr);
    const secondNum:number = parseInt(secondStr);

    const result:number = calculate(firstNum, operator as Operator, secondNum);

    console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);

}

function calculate(firstNum:number, operator:Operator, secondNum:number) : number
{
    switch(operator)
    {
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

function isNumber(str: string):boolean
{
    const maybeNum = parseInt(str); // 33 NaN
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}

function isOperator(operator:string):boolean
{
    switch(operator)
    {
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