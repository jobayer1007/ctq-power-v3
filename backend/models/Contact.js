const { Sequelize } = require('sequelize');

const Contact = (sequelize, DataTypes) =>
  sequelize.define('contact', {
    contactId: {
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
    address: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      notEmpty: true,
    },
    phone: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      notEmpty: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      validate: {
        isEmail: true,
      },
    },
  });

module.exports = Contact;
