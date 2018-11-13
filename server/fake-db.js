const Rental = require('./models/rental-model');

class fakeDb {
  constructor() {
    this.rentals = [
      {
        title: 'Nice view on ocean',
        city: 'San Francisco',
        street: 'Main Street',
        category: 'condo',
        image:
          'http://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg',
        bedrooms: 4,
        shared: true,
        description: 'Very nice apartment in center of the city.',
        dailyRate: 34
      },
      {
        title: 'Modern apartment in center',
        city: 'New York',
        street: 'Time Square',
        category: 'apartment',
        image:
          'http://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg',
        bedrooms: 1,
        shared: false,
        description: 'Very nice apartment in center of the city.',
        dailyRate: 11
      },
      {
        title: 'Old house in nature',
        city: 'Spisska Nova Vex',
        street: 'Banicka 1',
        category: 'house',
        image:
          'http://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg',
        bedrooms: 5,
        shared: true,
        description: 'Very nice apartment in center of the city.',
        dailyRate: 23
      }
    ];
  }

  async cleanDb() {
    await Rental.deleteMany();
  }

  pushRentalsToDb() {
    this.rentals.map(rental => {
      const newRental = Rental(rental);
      newRental.save();
    });
  }

  seedDb() {
    this.cleanDb();
    this.pushRentalsToDb();
  }
}

module.exports = fakeDb;
