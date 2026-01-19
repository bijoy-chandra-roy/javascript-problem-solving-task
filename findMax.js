import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

rl.question('Enter the number of elements: ', (size) => {
    let count = parseInt(size);
    let numbers = [];
    let i = 0;

    const askNumber = () => {
        if (i < count) {
            rl.question(`Enter number ${i + 1}: `, (num) => {
                numbers.push(Number(num));
                i++;
                askNumber();
            });
        } else {
            console.log('Maximum Number: ' + findMax(numbers));
            rl.close();
        }
    };

    askNumber();
});