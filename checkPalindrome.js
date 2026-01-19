import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindrome(str) {
  let text = str.toLowerCase();
  let reversed = '';

  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  if (text === reversed) {
    return true;
  } else {
    return false;
  }
}

rl.question('Enter a string to check for palindrome: ', (input) => {
  console.log('Is Palindrome: ' + isPalindrome(input));
  rl.close();
});