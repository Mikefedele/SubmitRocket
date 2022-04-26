const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create Period model
class Period extends Model {}

// create fields/columns for Location model
Period.init(
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
        modelName: "period",
    }
);

module.exports = Period;