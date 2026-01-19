import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumArrays(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
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

    const result = sumArrays(numbers);
    console.log('Sum of array:', result);
    rl.close();
};

main();