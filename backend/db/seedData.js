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
        rating VARCHAR(255),
        "imgUrl" TEXT
      );
    `)
      await client.query(`
        CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users(id),
        "mediaId" INTEGER [],
        date TEXT,
        purchased BOOLEAN DEFAULT false
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
        { title: 'Teenage Mutant Ninja Turtles', description: '4 lizards adopted by a rat go on a pizza fueled rampage across an innocent city.', genre: 'Family Friendly', 'rentalPrice': 7.99 , 'buyPrice': 29.99, rating: 'PG-13', 'imgUrl': 'https://xl.movieposterdb.com/15_02/1990/100758/xl_100758_e2190eef.jpg'},
        { title: 'Spy Kids', description: 'Kids on the street, kids on the beat. Spy Kids.', genre: 'Family Friendly', 'rentalPrice': 7.99, 'buyPrice': 29.99, rating: 'PG', 'imgUrl': 'https://xl.movieposterdb.com/15_02/2001/227538/xl_227538_0ff5729d.jpg'},
        { title: 'The Boss Baby 2', description: 'The baby is back in business, and this time, he means...business.', genre: 'Family Friendly', 'rentalPrice': 7.99, 'buyPrice': 15.99, rating: 'PG', 'imgUrl': 'https://xl.movieposterdb.com/20_01/2021/6932874/xl_6932874_045d044e.jpg'},
        { title: 'Mary Poppins', description: 'In turn of the century London, a magical nanny employs music and adventure to help two neglected children become closer to their father.', genre: 'Classic', 'rentalPrice': 7.99, 'buyPrice': 13.99, rating: 'G', 'imgUrl': 'https://xl.movieposterdb.com/08_12/1964/58331/xl_58331_dfb8a473.jpg'},
        { title: 'Fight Club', description: '...refer to rule #1', genre: 'Suspense/Action', 'rentalPrice': 7.99, 'buyPrice': 22.99, rating: 'R', 'imgUrl': 'https://xl.movieposterdb.com/09_10/1999/137523/xl_137523_436a6642.jpg'},
        { title: 'The Big Lebowski', description: 'Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.', genre: 'Comedy', 'rentalPrice': 7.99, 'buyPrice': 18.99, rating: 'R', 'imgUrl': 'https://xl.movieposterdb.com/09_02/1998/118715/xl_118715_e3aa6190.jpg'},
        { title: 'Star Wars', description: 'The beloved classic, just in time for Christmas!', genre: 'Sci-Fi', 'rentalPrice': 7.99, 'buyPrice': 26.99, rating: 'PG-13', 'imgUrl': 'https://xl.movieposterdb.com/12_12/1978/193524/xl_193524_b53370a6.jpg'},
        { title: 'Star Trek II: The Wrath of Khan', description: 'It is the 23rd century. The Federation Starship U.S.S. Enterprise™ is on routine training maneuvers and Admiral James T. Kirk (William Shatner) seems resigned to the fact that this inspection may well be the last space mission of his career. But Khan is back. Aided by his exiled band of genetic supermen, Khan (Ricardo Montalban) - brilliant renegade of 20th century Earth - has raided Space Station Regula One, stolen a top secret device called Project Genesis, wrested control of another Federation Starship and sets out in pursuit of the Enterprise, determined to let nothing stand in the way of his mission: kill Admiral Kirk... even if it means universal Armageddon.', genre: 'Sci-Fi', 'rentalPrice': 7.99, 'buyPrice': 18.99, rating: 'PG-13', 'imgUrl': 'https://xl.movieposterdb.com/13_10/1982/84726/xl_84726_1b429e52.jpg'},
        { title: 'The Dark Knight', description: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.', genre: 'Action', 'rentalPrice': 7.99, 'buyPrice': 26.99, rating: 'R', 'imgUrl': 'https://xl.movieposterdb.com/08_04/2008/468569/xl_468569_828524e8.jpg'},
        { title: 'Lost in Translation', description: 'Two lost souls visiting Tokyo -- the young, neglected wife of a photographer and a washed-up movie star shooting a TV commercial -- find an odd solace and pensive freedom to be real in each others company, away from their lives in America.', genre: 'Comedy', 'rentalPrice': 7.99, 'buyPrice': 26.99, rating: 'PG-13', 'imgUrl': 'https://xl.movieposterdb.com/12_05/2003/335266/xl_335266_ddbfd3ce.jpg'},
        { title: 'Star Trek: The Motion Picture', description: 'When a destructive space entity is spotted approaching Earth, Admiral Kirk resumes command of the Starship Enterprise in order to intercept, examine, and hopefully stop it.', genre: 'Sci-Fi', 'rentalPrice': 7.99, 'buyPrice': 26.99, rating: 'PG-13', 'imgUrl': 'https://xl.movieposterdb.com/09_06/2009/796366/xl_796366_b7fc878b.jpg'},
        { title: '48 Hrs.', description: 'A hard-nosed cop reluctantly teams up with a wise-cracking criminal temporarily paroled to him, in order to track down a killer.', genre: 'Drama', 'rentalPrice': 7.99, 'buyPrice': 26.99, rating: 'PG-13', 'imgUrl': 'https://xl.movieposterdb.com/06_08/1982/0083511/xl_127299_0083511_66271ea7.jpg'},
        { title: 'Lock, Stock and Two Smoking Barrels', description: 'A card shark and his unwillingly-enlisted friends need to make a lot of cash quick after losing a sketchy poker match. To do this they decide to pull a heist on a small-time gang who happen to be operating out of the flat next door.', genre: 'Comedy', 'rentalPrice': 7.99, 'buyPrice': 26.99, rating: 'PG-13', 'imgUrl': 'https://xl.movieposterdb.com/05_08/1998/0120735/xl_41146_0120735_c73c18be.jpg'},
        { title: 'Jarhead', description: 'Jarhead is a film about a US Marine Anthony Swofford’s experience in the Gulf War. After putting up with an arduous boot camp, Swofford and his unit are sent to the Persian Gulf where they are eager to fight, but are forced to stay back from the action. Swofford struggles with the possibility of his girlfriend cheating on him, and as his mental state deteriorates, his desire to kill increases.', genre: 'Drama', 'rentalPrice': 7.99, 'buyPrice': 26.99, rating: 'R', 'imgUrl': 'https://xl.movieposterdb.com/05_11/2005/0418763/xl_67312_0418763_6406d4ef.jpg'},
        { title: 'Kill Bill: Vol. 1', description: 'An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle – but she lives to plot her vengeance.', genre: 'Action', 'rentalPrice': 7.99, 'buyPrice': 26.99, rating: 'R', 'imgUrl': 'https://xl.movieposterdb.com/08_05/2003/266697/xl_266697_d1d415b0.jpg'},
        { title: 'Pirates of the Caribbean: The Curse of the Black Pearl', description: 'Jack Sparrow, a freewheeling 18th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governors daughter is kidnapped, Sparrow decides to help the girls love save her', genre: 'Action', 'rentalPrice': 7.99, 'buyPrice': 26.99, rating: 'PG-13', 'imgUrl': 'https://xl.movieposterdb.com/10_01/2003/325980/xl_325980_6a4da6c6.jpg'},
        { title: 'Star Trek III: The Search for Spock', description: 'Admiral Kirk and his bridge crew risk their careers stealing the decommissioned Enterprise to return to the restricted Genesis planet to recover Spocks body.', genre: 'Sci-Fi', 'rentalPrice': 7.99, 'buyPrice': 26.99, rating: 'PG-13', 'imgUrl': 'https://xl.movieposterdb.com/06_07/1984/0088170/xl_123283_0088170_69896edb.jpg'},
        { title: "Star Trek VI: The Undiscovered Country", description: "After years of war, the Federation and the Klingon empire find themselves on the brink of a peace summit when a Klingon ship is nearly destroyed by an apparent attack from the Enterprise. Both worlds brace for what may be their dealiest encounter.", genre: 'Sci-Fi', 'rentalPrice': 7.99, 'buyPrice': 18.99, rating: 'PG-13', 'imgUrl': 'https://www.movieposterdb.com/star-trek-vi-the-undiscovered-country-i102975'},
        { title: "Star Trek V: The Final Frontier", description: "The crew of the Federation starship Enterprise is called to Nimbus III, the Planet of Intergalactic Peace. They are to negotiate in a case of kidnapping only to find out that the kidnapper is a relative of Spock. This man is possessed by his life long search for the planet Shaka-Ri which is supposed to be the source of all life. Together they begin to search for this mysterious planet.", genre: 'Sci-Fi', 'rentalPrice': 7.99, 'buyPrice': 18.99, rating: 'PG-13', 'imgUrl': 'https://xl.movieposterdb.com/11_11/1989/98382/xl_98382_cb4f3ed9.jpg'},
        { title: "28 Days Later", description: "Twenty-eight days after a killer virus was accidentally unleashed from a British research facility, a small group of London survivors are caught in a desperate struggle to protect themselves from the infected. Carried by animals and humans, the virus turns those it infects into homicidal maniacs -- and it's absolutely impossible to contain.", genre: 'Sci-Fi', 'rentalPrice': 7.99, 'buyPrice': 18.99, rating: 'R', 'imgUrl': 'https://xl.movieposterdb.com/15_09/2002/289043/xl_289043_2d0427a3.jpg'},
        { title: 'Knockin on Heavens Door', description: 'Two young men, Martin and Rudi, both suffering from terminal cancer, get to know each other in a hospital room. They drown their desperation in tequila and decide to take one last trip to the sea. Drunk and still in pajamas they steal the first fancy car they find, a 60s Mercedes convertible. The car happens to belong to a bunch of gangsters, which immediately start to chase it, since it contains more than the pistol Martin finds in the glove box.', genre: 'Comedy', 'rentalPrice': 7.99, 'buyPrice': 18.99, rating: 'PG-13', 'imgUrl': 'https://xl.movieposterdb.com/05_08/1997/0119472/xl_46749_0119472_5436b487.jpg'},
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
          rental: false,
    
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