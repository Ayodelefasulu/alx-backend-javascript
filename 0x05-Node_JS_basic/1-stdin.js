// 1-stdin.js

// Print the welcome message to the user
console.log('Welcome to Holberton School, what is your name?');

// Read from stdin (standard input) using the 'process.stdin' stream
process.stdin.setEncoding('utf8');

// Listen for user input
process.stdin.on('data', (input) => {
  const name = input.trim(); // Remove extra spaces or new lines
  console.log(`Your name is: ${name}`);

  // Close the stdin stream once input is received
  process.stdin.end();
});

// When the stdin stream is closed, display the closing message
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
