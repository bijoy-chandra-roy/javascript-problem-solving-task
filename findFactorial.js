import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

rl.question('Enter a number: ', (input) => {
    console.log('Factorial: ' + factorial(parseInt(input)));
    rl.close();
});