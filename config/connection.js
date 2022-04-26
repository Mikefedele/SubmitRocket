// Require supporting NPM modules
const Sequelize = require('sequelize');
require('dotenv').config();

// If the environment points to JAWSDB_URL, then use else, use the credentials in the .env file

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        dialectOptions: {
            decimalNumbers: true,
        },
    });

// Export the sequelize object
module.exports = sequelize;
