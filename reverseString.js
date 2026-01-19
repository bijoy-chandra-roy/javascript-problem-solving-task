import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseString(str) {
    let reversed = '';
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}

rl.question('Enter a string to reverse: ', (input) => {
    console.log('Reversed string          : ' + reverseString(input));
    rl.close();
});