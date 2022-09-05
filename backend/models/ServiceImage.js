const { Sequelize } = require('sequelize');

const ServiceImage = (sequelize, DataTypes) =>
  sequelize.define('serviceImage', {
    imageId: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
      notEmpty: true,
    },
    imageTitle: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  });

module.exports = ServiceImage;
