const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create Product model
class Product extends Model {}

// create fields/columns for Location model
Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: "product",
    }
);

module.exports = Product;
