const express = require('express');
const cors = require('cors');
const path = require('path');
const menu = require('./data/menu.json');

const app = express();
app.use(cors());
app.use(express.json());
//Server Image
app.use('/images', express.static(path.join(__dirname, 'data/images')));
//Menu Image
app.get('/api/menu', (req, res) => res.json(menu));
app.post('/api/orders', (req, res) => res.json({ success: true, orderId: Date.now() }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));