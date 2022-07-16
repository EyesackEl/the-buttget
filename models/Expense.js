const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Expense extends Model {}

Expense.init(
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
    sum: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    subcategory_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'subcategory',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'expense'
  }
);

module.exports = Expense;
