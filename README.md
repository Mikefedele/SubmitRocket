# SubmitRocket

  ![Generic badge](https://img.shields.io/badge/license-mit-green.svg)

  #### Table of Contents
  
  1. [Description](#description)
  2. [Installation Instructions](#installation-instructions)
  3. [Usage](#usage)
  4. [Test Instructions](#test-instructions)
  5. [License](#license)
  6. [Credits](#credits)
  
  ## Description
  * Welcome to SubmitRocket! This is a website where the user creates an account to record and submit unit field sales, which will be saved to a database. It was developed with Node.js using the following NPM packages:

    * express, express-session, express-handlebars
    * sequelize, connect-session-sequelize
    * grid.js
    * bcrypt

  ![image](./assets/01.PNG)
  ![image](./assets/02.PNG)
  
  ## Installation Instructions
  * In order to install and use this program locally, you must have node.js installed first. Download this repository and access it in your terminal of choice. When you are in the root folder enter "npm install" in the terminal to install all necessary packages. Be sure to fill out the env.EXAMPLE file and put your mySQL username and password, then rename the file to just ".env". In the terminal, log in to mySQL and type "source db/schema.sql;" to set up the ecommerce database. Then, exit mySQL and in the terminal type "npm run seed" to add starting data. Afterwards, type "npm start" into the prompt to begin the program. 
  
  This program has also been deployed through Heroku, which you can access here: (https://submit-rocket.herokuapp.com/)

  ![image](./assets/QR.PNG)
  
  ## Usage
  * Use this program to record and submit unit field sales for your business. No need for messy spreadsheets any longer!
  
  ## Test Instructions
  * No testing through Node, but you can use Insomnia to test API endpoints.
  
  ## License
  * The application is covered under the following license:
    [mit](https://choosealicense.com/licenses/mit)
  
  ## Credits
  * This project was made possible by the following contributors:

    * Mike Fedele (github: Mikefedele)
    * Isaak Morales (github: CallMeIce)
    * Quin Eddy (github: qkeddy)
    * Jared Keebler (github: jakekeebler)