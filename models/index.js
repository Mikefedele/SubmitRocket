const Period = require("./Period");
const Product = require("./Product");
const User = require("./User");
const Fact = require("./Fact");

Fact.belongsTo(Period, {
    as: "period",
    foreignKey: "period_id"
});
Period.hasMany(Fact, {
    as: "facts",
    foreignKey: "period_id"
});
Fact.belongsTo(Product, {
    as: "product",
    foreignKey: "product_id"
});
Product.hasMany(Fact, {
    as: "facts",
    foreignKey: "product_id"
});
Fact.belongsTo(User, {
    as: "user",
    foreignKey: "user_id"
});
User.hasMany(Fact, {
    as: "facts",
    foreignKey: "user_id"
});

module.exports = {
    Period,
    Product,
    User,
    Fact
};