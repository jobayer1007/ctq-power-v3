const { Sequelize } = require('sequelize');

const MainMenu = (sequelize, DataTypes) =>
  sequelize.define(
    'mainMenu',
    {
      mainMenuId: {
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
      details: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['title'],
        },
      ],
    }
  );

module.exports = MainMenu;
