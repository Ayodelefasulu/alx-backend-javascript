// 8-api/api.js
const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

const server = app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Export app for testing
module.exports = app;
