const asyncHandler = require('express-async-handler');
const { SubMenu, SubMenuCat } = require('../models/index');
const models = require('../models/index');

// @desc    Create a new Main Menu At     ///////////////////////////////////////////////
// @route   POST /api/mat
// @access  Private/SystemAdmin || Admin
exports.createNewMainMenuAt = asyncHandler(async (req, res) => {
  const { mainMenuId, title, details, image } = req.body;
  const titleExists = await models.Attribute.findOne({
    where: { title: title, mainMenuId: mainMenuId },
  });
  if (titleExists) {
    res.status(400);
    throw new Error('title already exists');
  } else {
    const newMainMenuAt = await models.Attribute.create({
      title,
      details,
      image,
      mainMenuId,
    });
    if (newMainMenuAt) {
      res.json(newMainMenuAt);
    } else {
      res.status(400);
      throw new Error(
        'Encountered problem while creating new main menu attribute'
      );
    }
  }
});

// @desc    GET all main Menu Attributes    ///////////////////////////////////////////////
// @route   GET /api/mat
// @access  Public
exports.getAllMainMenuAt = asyncHandler(async (req, res) => {
  const mainMenuAt = await models.Attribute.findAll({
    order: [['createdAt', 'DESC']],
  });
  if (mainMenuAt && mainMenuAt.length !== 0) {
    res.send(mainMenuAt);
  } else {
    res.status(404);
    throw new Error('No Main Menu at');
  }
});

// @desc    Get a Main Menu Attribute by Id     ///////////////////////////////////////////////
// @route   GET /api/mat/:id
// @access  Public
exports.mainMenuAtById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const mainMenuAt = await models.Attribute.findOne({
    where: { attributeId: id },
  });

  if (mainMenuAt) {
    res.json(mainMenuAt);
  } else {
    res.status(404);
    throw new Error('Attribute not found');
  }
});

// @desc   Update an Attribute by Id      ///////////////////////////////////////////////
// @route   PUT /api/mat/:id
// @access  Private/Admin || SystemAdmin
exports.updateMainMenuAtById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const mainMenuAt = await models.Attribute.findOne({
    where: { attributeId: id },
  });

  if (mainMenuAt) {
    const data = {
      title: req.body.title || mainMenuAt.title,
      details: req.body.details || mainMenuAt.details,
      image: req.body.image || mainMenuAt.image,
    };

    let { title, details, image } = data;
    const updatedMainMenuAt = await models.Attribute.update(
      {
        title,
        details,
        image,
      },
      { where: { attributeId: id } }
    );

    if (updatedMainMenuAt == 1) {
      res.send('Attribute update successful');
    } else {
      res.status(400);
      throw new Error('Attribute update unsuccessful');
    }
  } else {
    res.status(404);
    throw new Error('Attribute not found');
  }
});

// @desc    Delete a Attribute     ///////////////////////////////////////////////
// @route   DELETE /api/mat/:id
// @access  Private/Admin
exports.deleteMainMenuAt = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const mainMenuAt = await models.Attribute.findOne({
    where: { attributeId: id },
  });

  if (mainMenuAt) {
    models.Attribute.destroy({
      where: { attributeId: id },
    })
      .then((num) => {
        if (num == 1) {
          res.json('Attribute has been deleted successfully');
        } else {
          res.status(400);
          throw new Error('Cannot delete the Attribute');
        }
      })
      .catch((err) => console.log(err));
  } else {
    res.status(404);
    throw new Error('Attribute not found');
  }
});
