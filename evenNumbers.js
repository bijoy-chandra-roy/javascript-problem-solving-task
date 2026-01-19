import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function evenNumbers(arr) {
    let evens = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        }
    }
    return evens;
}

function question(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

const main = async () => {
    const size = await question('Enter the number of elements: ');
    const count = parseInt(size);
    const numbers = [];

    for (let i = 0; i < count; i++) {
        const num = await question(`Enter number ${i + 1}: `);
        numbers.push(Number(num));
    }

    const result = evenNumbers(numbers);
    console.log('Even numbers:', result);
    rl.close();
};

main();