const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send(`
    <h1>🔥 Mack-tech Bot Live! 🔥</h1>
    <p>Your bot is running 24/7</p>
    <p>Time: ${new Date().toLocaleString()}</p>
    <p>Made by Adzule</p>
  `);
});

app.get('/ping', (req, res) => {
  res.send('Mack-tech Bot Active!');
});

app.listen(PORT, () => {
  console.log(`Mack-tech Bot running on port ${PORT}`);
});
