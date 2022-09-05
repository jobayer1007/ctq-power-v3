const { Sequelize } = require('sequelize');

const Project = (sequelize, DataTypes) =>
  sequelize.define(
    'project',
    {
      projectId: {
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
      image: {
        type: DataTypes.STRING,
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

module.exports = Project;
