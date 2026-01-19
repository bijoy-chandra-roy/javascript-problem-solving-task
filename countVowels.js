import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countVowels(str) {
    let count = 0;
    let text = str.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    return count;
}

rl.question('Enter a string: ', (input) => {
    console.log('Number of vowels: ' + countVowels(input));
    rl.close();
});