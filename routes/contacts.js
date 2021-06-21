const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`getting all contact`);
});

router.post('/', (req, res) => {
  res.send('add contact');
});

router.put('/:id', (req, res) => {
  res.send('Update Contact');
});

router.delete('/:id', (req, res) => {
  res.send('delete Contact');
});
module.exports = router;
