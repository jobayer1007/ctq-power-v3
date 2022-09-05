const { Sequelize } = require('sequelize');

const ProjectImage = (sequelize, DataTypes) =>
  sequelize.define('projectImage', {
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

module.exports = ProjectImage;
