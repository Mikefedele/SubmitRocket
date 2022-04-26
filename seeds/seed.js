const sequelize = require("../config/connection");
const { Period, Product, User } = require("../models");

const periodSeedData = require("./periodSeedData.json");
const productsSeedData = require("./productsSeedData.json");
const usersSeedData = require("./usersSeedData.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const periods = await Period.bulkCreate(periodSeedData);

    const products = await Product.bulkCreate(productsSeedData);

    const users = await User.bulkCreate(usersSeedData);

    // TODO - load random demo sales data

    process.exit(0);
};

seedDatabase();
