// Import important parts of sequelize library
const sequelize = require('../config/connection');

const { Period, Product, User, Fact } = require('../models');

const periodSeedData = require('./periodSeedData.json');
const productsSeedData = require('./productsSeedData.json');
const usersSeedData = require('./usersSeedData.json');
const factSeedData = require('./factSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Period.bulkCreate(periodSeedData);

    await Product.bulkCreate(productsSeedData);

    await User.bulkCreate(usersSeedData);

    await Fact.bulkCreate(factSeedData);

    process.exit(0);
};

seedDatabase();
