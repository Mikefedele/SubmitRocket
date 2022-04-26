const sequelize = require('../config/connection');
const { Period, Product, User, Fact } = require('../models');

const periodSeedData = require('./periodSeedData.json');
const productsSeedData = require('./productsSeedData.json');
const usersSeedData = require('./usersSeedData.json');
const factSeedData = require('./factSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const periods = await Period.bulkCreate(periodSeedData);

    const products = await Product.bulkCreate(productsSeedData);

    const users = await User.bulkCreate(usersSeedData);

    const facts = await Fact.bulkCreate(factSeedData);

    process.exit(0);
};

seedDatabase();
