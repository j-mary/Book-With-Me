const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');
const cors = require('cors');

const app = express();

//routes
const rentalRoutes = require('./routes/rental-route');
const userRoutes = require('./routes/user-route');

//models
const Rental = require('./models/rental-model');

mongoose
  .connect(
    config.LOCAL,
    { useNewUrlParser: true }
  )
  .then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
    console.log('MongoDB Connected...');
  })
  .catch(err => console.error('Failed to connect to MongoDB'));

app.use(cors());
app.use(express.json());
app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}...`));