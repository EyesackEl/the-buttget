const User = require('./User');
const Category = require('./Category');
const Subcategory = require('./Subcategory');
const Expense = require('./Expense');
const Transaction = require('./Transaction');

User.hasMany(Category, {
    foreignKey: 'user_id',
});

Category.belongsTo(User, {
foreignKey: 'user_id',
});

Category.hasMany(Subcategory, {
    foreignKey: 'category_id',
});

Subcategory.belongsTo(Category, {
foreignKey: 'category_id',
});

Subcategory.hasMany(Expense, {
    foreignKey: 'category_id',
});

Expense.belongsTo(Subcategory, {
foreignKey: 'category_id',
});

Expense.hasMany(Transaction, {
    foreignKey: 'expense_id',
});

Transaction.belongsTo(Expense, {
foreignKey: 'expense_id',
});

module.exports = { User, Category, Subcategory, Expense, Transaction };
