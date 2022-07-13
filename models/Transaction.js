const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Transaction extends Model {}

Transaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    value: {
      type: DataTypes.STRING,
    },
    expense_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'expense',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'transaction'
  }
);

module.exports = Transaction;
