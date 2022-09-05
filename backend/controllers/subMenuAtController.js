const asyncHandler = require('express-async-handler');
const { SubMenu, SubMenuCat } = require('../models/index');
const models = require('../models/index');

// @desc    Create a new Sub-Menu At     ///////////////////////////////////////////////
// @route   POST /api/sat
// @access  Private/SystemAdmin || Admin
exports.createNewSubMenuAt = asyncHandler(async (req, res) => {
  const { subMenuId, title, details, image } = req.body;
  const titleExists = await models.SubMenuAt.findOne({
    where: { title: title, subMenuId: subMenuId },
  });
  if (titleExists) {
    res.status(400);
    throw new Error('title already exists');
  } else {
    const newSubMenuAt = await models.SubMenuAt.create({
      title,
      details,
      image,
      subMenuId,
    });
    if (newSubMenuAt) {
      res.json(newSubMenuAt);
    } else {
      res.status(400);
      throw new Error(
        'Encountered problem while creating new sub-menu attribute'
      );
    }
  }
});

// @desc    GET all sub-Menu Attributes    ///////////////////////////////////////////////
// @route   GET /api/sat
// @access  Public
exports.getAllSubMenuAt = asyncHandler(async (req, res) => {
  const subMenuAt = await models.SubMenuAt.findAll({
    order: [['createdAt', 'DESC']],
  });
  if (subMenuAt && subMenuAt.length !== 0) {
    res.send(subMenuAt);
  } else {
    res.status(404);
    throw new Error('No sub Menu attribute');
  }
});

// @desc    Get a Sub-Menu Attribute by Id     ///////////////////////////////////////////////
// @route   GET /api/sat/:id
// @access  Public
exports.subMenuAtById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const subMenuAt = await models.SubMenuAt.findOne({
    where: { subMenuAtId: id },
  });

  if (subMenuAt) {
    res.json(subMenuAt);
  } else {
    res.status(404);
    throw new Error('Attribute not found');
  }
});

// @desc   Update an Sub-menu Attribute by Id      ///////////////////////////////////////////////
// @route   PUT /api/sat/:id
// @access  Private/Admin || SystemAdmin
exports.updateSubMenuAtById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const subMenuAt = await models.SubMenuAt.findOne({
    where: { subMenuAtId: id },
  });

  if (subMenuAt) {
    const data = {
      title: req.body.title || subMenuAt.title,
      details: req.body.details || subMenuAt.details,
      image: req.body.image || subMenuAt.image,
    };

    let { title, details, image } = data;
    const updatedSubMenuAt = await models.SubMenuAt.update(
      {
        title,
        details,
        image,
      },
      { where: { subMenuAtId: id } }
    );

    if (updatedSubMenuAt == 1) {
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

// @desc    Delete a sub-menu Attribute     ///////////////////////////////////////////////
// @route   DELETE /api/sat/:id
// @access  Private/Admin
exports.deleteSubMenuAt = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const subMenuAt = await models.SubMenuAt.findOne({
    where: { subMenuAtId: id },
  });

  if (subMenuAt) {
    models.SubMenuAt.destroy({
      where: { subMenuAtId: id },
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
