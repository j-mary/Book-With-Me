const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');

const app = express();

//routes
const rentalRoutes = require('./routes/rental-route');

//models
const Rental = require('./models/rental-model');

mongoose
  .connect(
    config.DB_URI,
    { useNewUrlParser: true }
  )
  .then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
    console.log('MongoDB Connected...');
  })
  .catch(err => console.error('Failed to connect to MongoDB'));

app.use('/api/v1/rentals', rentalRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}...`));
