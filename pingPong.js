import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pingPong(limit) {
    let result = [];
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('PingPong');
        } else if (i % 3 === 0) {
            result.push('Ping');
        } else if (i % 5 === 0) {
            result.push('Pong');
        } else {
            result.push(i);
        }
    }
    return result.join(', ');
}

rl.question('Enter a number: ', (input) => {
    console.log(pingPong(parseInt(input)));
    rl.close();
});