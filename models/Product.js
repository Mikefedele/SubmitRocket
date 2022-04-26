// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// Import database connection from config.js
const sequelize = require('../config/connection');

// Create Product model
class Product extends Model {}

// Create fields/columns for Product model
Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        unit: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'product'
    }
);

module.exports = Product;
