const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const basename = path.basename(module.filename);

dotenv.config();

const db = {};

const sequelize = new Sequelize(
  process.env.PG_DATABASE,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
  // )
);
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  console.log('Model name :'.cyan.underline, modelName.green.underline);
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Test DB
sequelize
  .authenticate()
  .then(() =>
    console.log(
      `Connected to Database : ${process.env.PG_DATABASE} `.cyan.underline
    )
  )
  .catch((err) => console.error(err.message.red.underline.bold));

// //Models/tables
db.User = require('../models/User')(sequelize, Sequelize);
db.Introduction = require('../models/Introduction')(sequelize, Sequelize);
db.Project = require('../models/Project')(sequelize, Sequelize);
db.ProjectImage = require('../models/ProjectImage')(sequelize, Sequelize);
db.Service = require('../models/Service')(sequelize, Sequelize);
db.ServiceImage = require('../models/ServiceImage')(sequelize, Sequelize);
db.Contact = require('../models/Contact')(sequelize, Sequelize);
db.About = require('../models/About')(sequelize, Sequelize);

db.MainMenu = require('../models/MainMenu')(sequelize, Sequelize);
db.SubMenu = require('../models/SubMenu')(sequelize, Sequelize);
db.SubMenuCat = require('../models/SubMenuCat')(sequelize, Sequelize);
db.Attribute = require('../models/Attribute')(sequelize, Sequelize);
db.SubMenuAt = require('../models/SubMenuAt')(sequelize, Sequelize);
db.SubMenuCatAt = require('../models/SubMenuCatAt')(sequelize, Sequelize);

//Model relationships

// Project RELATION ProjectImage
db.Project.hasMany(db.ProjectImage, { foreignKey: 'projectId' });
db.ProjectImage.belongsTo(db.Project, { foreignKey: 'projectId' });

// Project RELATION ProjectImage
db.Service.hasMany(db.ServiceImage, { foreignKey: 'serviceId' });
db.ServiceImage.belongsTo(db.Service, { foreignKey: 'serviceId' });

// MainMenu - SubMenu
db.MainMenu.hasMany(db.SubMenu, {
  foreignKey: 'mainMenuId',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
});
db.SubMenu.belongsTo(db.MainMenu, { foreignKey: 'mainMenuId' });

// MainMenu - Attribute
db.MainMenu.hasMany(db.Attribute, {
  foreignKey: 'mainMenuId',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
});
db.Attribute.belongsTo(db.MainMenu, { foreignKey: 'mainMenuId' });

// SubMenu - SubMenuCat
db.SubMenu.hasMany(db.SubMenuCat, {
  foreignKey: 'subMenuId',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
});
db.SubMenuCat.belongsTo(db.SubMenu, { foreignKey: 'subMenuId' });

// SubMenu - SubMenuAt
db.SubMenu.hasMany(db.SubMenuAt, {
  foreignKey: 'subMenuId',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
});
db.SubMenuAt.belongsTo(db.SubMenu, { foreignKey: 'subMenuId' });

// SubMenuCat - SubMenuCatAt
db.SubMenuCat.hasMany(db.SubMenuCatAt, {
  foreignKey: 'subMenuCatId',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
});
db.SubMenuCatAt.belongsTo(db.SubMenuCat, { foreignKey: 'subMenuCatId' });

module.exports = db;
