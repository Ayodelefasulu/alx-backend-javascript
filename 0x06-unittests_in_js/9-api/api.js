// 9-api/api.js
const express = require('express');

const app = express();
const PORT = process.env.PORT || 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Add the new endpoint for /cart/:id
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Handle non-numeric IDs with a 404 response
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
  });

// Export the app and the startServer function for testing
module.exports = app;
