# Restaurant-Data-Manager
Web application using node.js and Mongdb. Store sessions history and CRUD functionality

**By Victor Li**
This project is for an school assingment where I was evaluated on my use of mongodb and node.js. Below I will tell how to run this web application.
# Setting up the Application
## Set up mongodb
  - Please download mongodb and mongodb compass
  - In the cmd run the command mongod --dbpath=<abs path to the database>
  - In mongodb compass activate the server and make sure it is running on localhost:27017
## Set up node.js and express
  - Please download node.js
  - Once you are in the same directory as the app, run **npm install** to install the modules
  - Then run **node ./database-initalizer.js** to add items to the database
  - Then run **npm start**
  - Then go to http://localhost:3000/ 
## How to stop running the applicaiton
  - hit ctrl+c in the terminal to terminate the server
  
# Modules and Technology used
  - Mongodb
  - Express
  - Nodejs
  - Pug
