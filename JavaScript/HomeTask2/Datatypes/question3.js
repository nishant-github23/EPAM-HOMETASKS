/* Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

*/

const OperationalMap = {
    '+':(a,b) =>a+b,
    '-':(a,b) => a-b,
    '*':(a,b) => a*b,
    '/':(a,b) => a/b,
};

function mathematicalops(operation ,operand1 , operand2){
    return OperationalMap[operation](operand1,operand2);
}

console.log(mathematicalops('+', 4, 7));
console.log(mathematicalops('-', 15, 18));
console.log(mathematicalops('*', 5, 5));
console.log(mathematicalops('/', 49, 7));