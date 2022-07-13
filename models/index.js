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

Category.hasMany(Expense, {
    foreignKey: 'category_id',
});

Expense.belongsTo(Category, {
foreignKey: 'category_id',
});

Expense.hasMany(Transaction, {
    foreignKey: 'expense_id',
});

Transaction.belongsTo(Expense, {
foreignKey: 'expense_id',
});

module.exports = { User, Category, Expense, Transaction };
