const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Agent = sequelize.define('Agent', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('available', 'busy'),
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
  }, {
    tableName: 'agents', 
    freezeTableName: true,
    underscored: true 
  });
  
  module.exports = Agent;
  
