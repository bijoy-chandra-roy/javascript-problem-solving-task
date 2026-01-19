import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function capitalizeWords(str) {
    let words = str.split(' ');
    let result = [];
    for (let i = 0; i < words.length; i++) {
        result.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }
    return result.join(' ');
}

rl.question('Enter a string: ', (input) => {
    const result = capitalizeWords(input);
    console.log('Capitalized string:', result);
    rl.close();
});