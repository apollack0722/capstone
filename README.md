# PineAppleTV

-Thanks for checking out PineAppleTV.
	-Aaron Pollack
	
	
### Some notes on the app
**The app was designed and developed as part of the final project for FullStack Academy LSU Cohort 2020/2021**

**This project featured a team of 3 developers working in an agile workflow and daily standups**

**Originally designed and launched as an ecommerce app, after graduation Aaron has been redesigning the app to be a dashboard for a streaming like service, similar to (and inspired by) Apple TV, in order to gain more experience and have something to work with post-FSA**


##Deploying the application locally

### Running PineAppleTv locally (frontend)

1. Clone the repo to your local device
2. Navigate to the `./client` subfolder of the app parent folder and run `npm run start` there to initiate the front end. 

***dev note ** while the front end and server will run locally, the back end is deployed on heroku and the front end is set up to touch that deployed back end. Instructions to run a database locally and to seed that database will be included as the last option, but stability and full functionality will be limited by the database seed*

####Testing the server locally
1. After cloning the repository, navigate to the parent folder of the app.
2. Run `npm run start` from the terminal.
3. The terminal will notify you that the server is up, and what port it is running on. 

####Testing the Database and seeding
1. The database is built with PostgreSQL. You will need to have PostgreSQL on your machine in order for it to function. 
2. Initialize a PSQL database named "movie" (no quotation marks).
3. After cloning the repository, navigate to the parent directory of the app. 
4. run `npm run start` to start up the server.
5. run `npm run seed:dev` to set up the tables and seed the initial database with some data. 

*note that the front end and server will run locally, the back end is deployed on heroku and the front end is set up to touch that deployed back end. *

#### Next Steps
##### Look around, add some movies to your favorites page, create an account, etc. 

If you would like to have admin access to check out how that page looks, feel free to use the seeded Admin account: 
USERNAME- Aaron
Password - ap

*note admin functionality is not live at the moment as the refactor from ecommerce to dashboard is happening*

