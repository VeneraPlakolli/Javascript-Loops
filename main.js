
// 1. Write a program that requests a number from a user and finds the summation of every number from 1 to num. 
// For example, for number 4 it is 1 + 2 + 3 + 4 = 10.
/*
let sum = 0;
let i=1;
let number = parseInt(prompt('Enter a number: '));
while (i<=number) {
    sum += i;
    i++;
}
console.log('Shuma: ' + sum);
*/

// 2. Request two numbers and find only their largest common divisor.
/* */
// let num1 = parseInt(prompt('Enter first number: '));
// let num2 = parseInt(prompt('Enter second number: '));


// 3. Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.
/*
let number = parseInt(prompt('Enter a number: '));
let i=1;
do {
    i++;
    if(number % i == 0){
        console.log(i);
    }
    
} while(i<=number);
*/


// 4. Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.


// 5. Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. 
// Display the statistics. There’s only one variable (not 10) needed for input by a user. 
/*
let positive = 0;
let negative = 0;
let zero = 0;
let odd = 0;
let even = 0;
let i=1;

while(i<=10) {
    let number = parseInt(prompt('Enter a number: '));
    if(number > 0) {
        positive++;
    } else if(number < 0) {
        negative++;
    } else{
        zero++;
    } 

    if(number % 2 == 0) {
        even++;
    } else {
        odd++;
    }
    i++;
}
console.log('Positive: ' + positive + ', negative: ' + negative + ', zero: ' + zero + ', even: ' + even + ', odd: ' + odd);
*/



// 6. Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result and ask if the user wants 
// one more. The loop continues until the user refuses. 

/*
let res;

while(true){
    let input = prompt('Do you want to continue?');
    // 1 for yes, 0 for no
    if(input == 1){
    let firstnum = parseInt(prompt('Enter first number: '));
    let secondnum = parseInt(prompt('Enter second number: '));
    let sign = prompt('Enter a sign: ');
switch(sign) {
    
    case '+': 
        res = firstnum + secondnum; break;

    case '-': 
        res = firstnum - secondnum; break;

    case '*': 
        res = firstnum * secondnum; break;

    case '/': 
        res = firstnum / secondnum; break;

}
console.log(res);
    } else if(input == 0){
        break;
    }
}
*/


