// Import Models
const Period = require('./Period');
const Product = require('./Product');
const User = require('./User');
const Fact = require('./Fact');

// Facts have many Periods
Fact.belongsTo(Period, {
    as: 'period',
    foreignKey: 'period_id'
});
Period.hasMany(Fact, {
    as: 'facts',
    foreignKey: 'period_id',
    onDelete: 'CASCADE'
});

// Facts have many Products
Fact.belongsTo(Product, {
    as: 'product',
    foreignKey: 'product_id'
});
Product.hasMany(Fact, {
    as: 'facts',
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});

// Facts have many Users
Fact.belongsTo(User, {
    as: 'user',
    foreignKey: 'user_id'
});
User.hasMany(Fact, {
    as: 'facts',
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {
    Period,
    Product,
    User,
    Fact
};
