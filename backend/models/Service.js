const { Sequelize } = require('sequelize');

const Service = (sequelize, DataTypes) =>
  sequelize.define(
    'service',
    {
      serviceId: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        notEmpty: true,
      },
      name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        notEmpty: true,
      },
      summary: {
        type: DataTypes.TEXT,
      },
      details: {
        type: DataTypes.TEXT,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['name'],
        },
      ],
    }
  );

module.exports = Service;
