// 1-stdin.js

// Prompt the user with a message
console.log('Welcome to Holberton School, what is your name?');

// Read from stdin (standard input)
process.stdin.on('data', (data) => {
  const input = data.toString().trim(); // Get the user input and trim any extra whitespace
  console.log(`Your name is: ${input}`);

  // End the process after displaying the name
  process.exit();
});

// Handle the process exit and display a closing message
process.on('exit', () => {
  console.log('This important software is now closing');
});
