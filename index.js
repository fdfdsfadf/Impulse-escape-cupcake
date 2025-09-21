const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Optional: Add a dynamic route
app.get('/api/ping', (req, res) => {
  res.json({ message: 'Impulse Cupcake is alive!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
