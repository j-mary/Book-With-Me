const Rental = require('./models/rental-model');
const User = require('./models/user-model');

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

    this.users = [
      {
        "username": "Test User",
        "email": "test@gmail.com",
        "password": "password"
      }
    ];
  }

  async cleanDb() {
    await User.deleteMany();
    await Rental.deleteMany();
  }

  pushDataToDb() {
    const user = new User(this.users[0]);

    this.rentals.map(rental => {
      const newRental = Rental(rental);
      newRental.user = user;
      user.rentals.push(newRental);
      newRental.save();
    });

    user.save();
  }

  async seedDb() {
    await this.cleanDb();
    this.pushDataToDb();
  }
}

module.exports = fakeDb;
