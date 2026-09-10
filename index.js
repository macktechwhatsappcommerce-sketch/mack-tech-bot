const express = require('express');
const app = express();
app.use(express.json());
const PRODUCTS = {
  A123: { name: "Mack-tech Item A123", price: 250 },
  B456: { name: "Mack-tech Item B456", price: 450 }
};
app.get('/', (req, res) => res.send('Mack-tech Bot Live! Send A123 or B456'));
app.post('/webhook', (req, res) => {
  const msg = (req.body.message || '').toUpperCase().trim();
  if (PRODUCTS[msg]) {
    res.json({ reply: `You ordered ${PRODUCTS[msg].name} - R${PRODUCTS[msg].price}` });
  } else {
    res.json({ reply: "Welcome to Mack-tech! Send A123 or B456 to order." });
  }
});
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log('Live on ' + PORT));
