import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function removeDuplicates(arr) {
    return [...new Set(arr)];
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

    const result = removeDuplicates(numbers);
    console.log('Array without duplicates:', result);
    rl.close();
};

main();