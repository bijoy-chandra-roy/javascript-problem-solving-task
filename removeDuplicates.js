import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

rl.question('Enter the number of elements: ', (size) => {
    const count = parseInt(size);
    const numbers = [];
    let i = 0;

    const askNumber = () => {
        if (i < count) {
            rl.question(`Enter number ${i + 1}: `, (num) => {
                numbers.push(Number(num));
                i++;
                askNumber();
            });
        } else {
            const result = removeDuplicates(numbers);
            console.log('Array without duplicates:', result);
            rl.close();
        }
    };

    askNumber();
});