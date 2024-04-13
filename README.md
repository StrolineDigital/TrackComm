# E-Commerce Backend Database
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
  ## Description
  This project is to allow the user to interact with an ecommerce database and use routes to manipulate data in insomnia so that products, tags, and categories can all be modified using CRUD.
  ## Link To The Demo Video
  
  
   ## Installation
  To install this command line application the user must start by having node.js and mysql installed in their local machine and  downloading the Employee-SQL-Database file from the Github repository(Instructions for installing node.js can be found here https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) (instructions for installing mysql can be found here https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/). The user must be in the main directory and use the "npm i" or "npm install" command in their bash terminal (whichever is preferred) to install the package.json. Once the package.json is installed  the user will use bash to CD into the "db" folder where they can then run "mysql -u root -p" to enter into their mysql account. The user then must start with the command "source schema.sql;" which will install the schema file locally. The user must then type "quit" in the mysql terminal which will bring them back to the bash terminal. The user then enters the command "npm seeds/index.js" this will trigger the seed files in the seeds folder to populate the database with data. The user then will enter the command "npm start" which is programmed in the package.json which will start the e-commerce program via the server.js file using sql and node.js and run it on the local host's port 3001. The data can then be viewed and manipulated in insomnia by navigating to insomnia and entering the localhost url which will then allow the user to interact with the database. For users unfamiliar with insomnia, an installation guide can be found here https://docs.insomnia.rest/insomnia/install. Please enjoy this program, thank you for checking it out!

  ## User Story
  AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

  ## Acceptance Criteria
  GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
  ## Usage
 Once the installation instructions have been followed, the user must open the bash terminal and type "npm start" every time they'd like to use this application. The application can then be viewed and altered using insomnia, which is what the application is mainly designed to work with. It is also possible to use a plugin such as Postman in VScode, but this application has not been tested with the Postman platform. In insomnia the routes can be seen on the left-hand side of the screen and can be tested and populated with information by the user. For more information on how to use insomnia, a guide can be found here https://docs.insomnia.rest/insomnia/get-started

  ## Contributing
  This project was created by Luke Stroehlein from scratch with help from the BCS tutor Collin Porter for initial set up. Much help was found on the internet including resources such as w3schools and stack overflow.
  ## License
  This project is licensed under the MIT license.
  ## Tests
  The best way to test this project is to start the application in the command line and then enter the localhost url in insomnia. Data entry can be verified by testing the routes in the insomnia application and then  checking to see if the user's entry or deletion is reflected in the database.


  ## Questions
  If you have any questions, please feel free to reach out to me at strolinedigital@gmail.com. 
  You can also view my GitHub profile at https://github.com/StrolineDigital



