const express = require('express');
const app = express();

// 1. Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// 2. Handling Route Parameters (e.g., /user/123)
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send('User ID received: ${userId}');
});

// 3. Handling Multiple Route Parameters
app.get('/users/:userId/books/:bookId', (req, res) => {
  const { userId, bookId } = req.params;
  res.send('User: ${userId}, Book: ${bookId}');
});
// 4. Handling Query Parameters (e.g., /search?keyword=express&limit=10)
app.get('/search', (req, res) => {
  const { keyword, limit } = req.query;
  res.send('Search keyword: ${keyword}, Limit: ${limit}');
});

// 5. Building and displaying full URL
app.get('/url-info', (req, res) => {
  const fullUrl = "${req.protocol}";//${req.get('host')}${req.originalUrl};
  res.send('Full URL is: ${fullUrl}');
});

// Start server1
const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server is running at http://localhost:${PORT}');

});