const express = require('express');
const router = express.Router();
const Rental = require('../models/rental-model');

router.get('/', (req, res) => {
  Rental.find((err, foundRentals) => {
    res.send(foundRentals);
  }).sort('createdAt');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Rental.findById(id, (err, foundRental) => {
    if (err)
      return res.status(404).send({
        errors: [
          {
            title: 'Rental Error!',
            detail: 'Could not find Rental.'
          }
        ]
      });
    res.json(foundRental);
  });
});

module.exports = router;
