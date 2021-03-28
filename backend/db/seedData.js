// require in the database adapter functions as you write them (createUser, createActivity...)
// const { } = require('./');
const { createUser } = require('./users')
const { createMedia } = require('./media')
const { createOrder } = require('./orders')
const client = require('./client');
async function dropTables() {
    console.log('Dropping All Tables...');
    await client.query(`
        DROP TABLE IF EXISTS users, media, orders;`); 
  }
  // syntax err near username line 17
  async function createTables() {
    console.log("Starting to build tables...");
    try {
      await client.query(`
        CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL, 
        password VARCHAR(255) NOT NULL,
        "userEmail" VARCHAR(255) UNIQUE     
      )
    `);
      await client.query(`
        CREATE TABLE media (
        id SERIAL PRIMARY KEY, 
        title VARCHAR(255) UNIQUE NOT NULL,
        description TEXT,
        genre VARCHAR(255),
        "rentalPrice" MONEY NOT NULL,
        "buyPrice" MONEY NOT NULL,
        rating VARCHAR(255)
      );
    `)
      await client.query(`
        CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users(id),
        "mediaId" INTEGER REFERENCES media(id),
        date TEXT,
        count INTEGER DEFAULT 1,
        purchased BOOLEAN DEFAULT false,
        rental BOOLEAN DEFAULT true
      );
    `)
     }
    catch(error){
      throw error
    }
  }

  async function createInitialUsers() {
    console.log('Starting to create users...');
    try {
      const usersToCreate = [
        { username: 'Stephen', password: 'st', userEmail: 'st@g.com' },
        { username: 'Aaron', password: 'ap', userEmail: 'ap@g.com' },
        { username: 'Leslie', password: 'lg', userEmail: 'lg@g.com' },
      ]
      const users = await Promise.all(usersToCreate.map(createUser));
      console.log('Users created:');
      console.log(users);
      console.log('Finished creating users!');
    } catch (error) {
      console.error('Error creating users!');
      throw error;
    }
  }
  async function createInitialMedia() {
    try {
      console.log('Starting to create media...');
      const mediaToCreate = [
        { title: 'Adult Normal Samuri Lizards', description: '4 lizards adopted by a rat like pizza', genre: 'Family Friendly', 'rentalPrice': 7.99 , 'buyPrice': 29.99, rating: 'PG-13' },
        { title: 'Spy Kids', description: 'kids that are spys', genre: 'Family Friendly', 'rentalPrice': 7.99, 'buyPrice': 29.99, rating: 'PG'},
        { title: 'Boss Baby', description: 'kids that are bosses', genre: 'Family Friendly', 'rentalPrice': 7.99, 'buyPrice': 15.99, rating: 'PG'},
        { title: 'Mary Poppins', description: 'Like Mrs Doubtfire but without the drag', genre: 'Classic', 'rentalPrice': 7.99, 'buyPrice': 13.99, rating: 'G'},
        { title: 'Fight Club', description: '...refer to rule #1', genre: 'Suspense/Action', 'rentalPrice': 7.99, 'buyPrice': 22.99, rating: 'R'},
        { title: 'The Big Lebowski', description: 'the dude abides', genre: 'Comedy', 'rentalPrice': 7.99, 'buyPrice': 18.99, rating: 'R'},
        { title: 'Star Wars', description: 'One of the good ones', genre: 'Sci-Fi', 'rentalPrice': 7.99, 'buyPrice': 26.99, rating: 'PG-13'},
      ]
      const media = await Promise.all(mediaToCreate.map(createMedia));
      console.log('media created:');
      console.log(media);
      console.log('Finished creating media!');
    } catch (error) {
      console.error('Error creating media!');
      throw error;
    }
  }
  async function createInitialOrders() {
    try {
      console.log('starting to create orders');
      const ordersToCreate = [
        {
          userId: 3,
          mediaId: 7,
          date: Date(),
          purchased: true,
          rental: false
        },
        {
          userId: 3,
          mediaId: 1,
          date: Date(),
          purchased: false,
          rental: true
        },
        {
          userId: 1,
          mediaId: 1,
          date: Date(),
          purchased: false,
          rental: true 
        },
        {
          userId: 3,
          mediaId: 3,
          date: Date(),
          purchased: false,
          rental: true 
        },
        {
          userId: 2,
          mediaId: 5,
          date: Date(),
          purchased: true,
          rental: false
        },
        {
          userId: 2,
          mediaId: 6,
          date: Date() ,
          purchased: false,
          rental: true 
        },
        {
          userId: 3,
          mediaId: 1,
          date: Date(),
          purchased: false,
          rental: true 
        },
        {
          userId: 3,
          mediaId: 4,
          date: Date(),
          purchased: false,
          rental: true 
        },
        {
          userId: 1,
          mediaId: 2,
          date: Date(),
          purchased: false,
          rental: false 
        },
      ]
      const orders = await Promise.all(ordersToCreate.map(createOrder));
      console.log('orders created: ', orders)
      console.log('Finished creating orders')
    } catch (error) {
      throw error;
    }
  }
  async function rebuildDB() {
    try {
      client.connect();
      await dropTables();
      await createTables();
      await createInitialUsers();
      await createInitialMedia();
      await createInitialOrders();
    } catch (error) {
      console.log('Error during rebuildDB')
      throw error;
    }
  }
  module.exports = {
    rebuildDB
  };