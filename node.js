const express = require('express');
const app = express();
app.use(express.static('public')); // move index.html and assets to /public

app.get('/api/message', (req, res) => {
  res.json({ text: 'Cupcake says hello!' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
