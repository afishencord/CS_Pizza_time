const express = require('express');
const cors = require('cors');
const path = require('path');
const menu = require('./data/menu.json');

const app = express();
app.use(cors());
app.use(express.json());

// Serve images
app.use('/images', express.static(path.join(__dirname, 'data/images')));

// Menu endpoint
app.get('/api/menu', (req, res) => {
  res.json(menu);
});

// Mock order endpoint
app.post('/api/orders', (req, res) => {
  const { cart, payment } = req.body;
  console.log('[ORDER]', cart, payment);
  res.json({ success: true, orderId: Date.now() });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));