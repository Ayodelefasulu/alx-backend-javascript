// full_server/server.js
import express from 'express';
import routes from './routes/index';

const app = express();
const PORT = 1245;

// Set the database path from command line arguments
const dbPath = process.argv[2];
app.set('dbPath', dbPath);

app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Export the app
export default app;
