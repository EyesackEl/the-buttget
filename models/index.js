const User = require('./User');
const Category = require('./Category');
const Expense = require('./Expense');
const Transaction = require('./Transaction');

User.hasMany(Category, {
    foreignKey: 'user_id',
});

Category.belongsTo(User, {
foreignKey: 'user_id',
});

User.hasMany(Expense, {
    foreignKey: 'user_id',
});

Expense.belongsTo(User, {
foreignKey: 'user_id',
});

User.hasMany(Transaction, {
    foreignKey: 'user_id',
});

Transaction.belongsTo(User, {
foreignKey: 'user_id',
});

module.exports = { User, Category, Expense, Transaction };
