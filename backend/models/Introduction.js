const { Sequelize } = require('sequelize');

const Introduction = (sequelize, DataTypes) =>
  sequelize.define('introduction', {
    introId: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
      notEmpty: true,
    },
    title: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      notEmpty: true,
    },
    body: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
    },
  });

module.exports = Introduction;
