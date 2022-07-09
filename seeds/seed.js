const sequelize = require('../config/connection');
const { User, Category, Expense, Transaction } = require('../models');

const userSeedData = require('./userSeedData.json');
const categorySeedData = require('./categorySeedData.json');
const expenseSeedData = require('./expenseSeedData.json');
const transactionSeedData = require('./transactionSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  for (const category of categorySeedData) {
    const newCategory = await Category.create({
      ...category,
    });
  }

  for (const expense of expenseSeedData) {
    const newExpense = await Expense.create({
      ...expense,
    });
  }

  for (const transaction of transactionSeedData) {
    const newTransactoiny = await Transaction.create({
      ...transaction,
    });
  }

  process.exit(0);
};

seedDatabase();
