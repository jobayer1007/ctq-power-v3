const asyncHandler = require('express-async-handler');
const { SubMenu, SubMenuCat } = require('../models/index');
const models = require('../models/index');

// @desc    Create a new Sub-Menu Cat At     ///////////////////////////////////////////////
// @route   POST /api/scat
// @access  Private/SystemAdmin || Admin
exports.createNewSubMenuCatAt = asyncHandler(async (req, res) => {
  const { subMenuCatId, title, details, image } = req.body;
  const titleExists = await models.SubMenuCatAt.findOne({
    where: { title: title, subMenuCatId: subMenuCatId },
  });
  if (titleExists) {
    res.status(400);
    throw new Error('title already exists');
  } else {
    const newSubMenuCatAt = await models.SubMenuCatAt.create({
      title,
      details,
      image,
      subMenuCatId,
    });
    if (newSubMenuCatAt) {
      res.json(newSubMenuCatAt);
    } else {
      res.status(400);
      throw new Error(
        'Encountered problem while creating new sub-menu Cat attribute'
      );
    }
  }
});

// @desc    GET all sub-Menu cat Attributes    ///////////////////////////////////////////////
// @route   GET /api/scat
// @access  Public
exports.getAllSubMenuCatAt = asyncHandler(async (req, res) => {
  const subMenuCatAt = await models.SubMenuCatAt.findAll({
    order: [['createdAt', 'DESC']],
  });
  if (subMenuCatAt && subMenuCatAt.length !== 0) {
    res.send(subMenuCatAt);
  } else {
    res.status(404);
    throw new Error('No sub Menu Cat attribute');
  }
});

// @desc    Get a Sub-Menu Cat Attribute by Id     ///////////////////////////////////////////////
// @route   GET /api/scat/:id
// @access  Public
exports.subMenuCatAtById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const subMenuCatAt = await models.SubMenuCatAt.findOne({
    where: { subMenuCatAtId: id },
  });

  if (subMenuCatAt) {
    res.json(subMenuCatAt);
  } else {
    res.status(404);
    throw new Error('Attribute not found');
  }
});

// @desc   Update an Sub-menu Cat Attribute by Id      ///////////////////////////////////////////////
// @route   PUT /api/scat/:id
// @access  Private/Admin || SystemAdmin
exports.updateSubMenuCatAtById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const subMenuCatAt = await models.SubMenuCatAt.findOne({
    where: { subMenuCatAtId: id },
  });

  if (subMenuCatAt) {
    const data = {
      title: req.body.title || subMenuCatAt.title,
      details: req.body.details || subMenuCatAt.details,
      image: req.body.image || subMenuCatAt.image,
    };

    let { title, details, image } = data;
    const updatedSubMenuCatAt = await models.SubMenuCatAt.update(
      {
        title,
        details,
        image,
      },
      { where: { subMenuCatAtId: id } }
    );

    if (updatedSubMenuCatAt == 1) {
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

// @desc    Delete a sub-menu cat Attribute     ///////////////////////////////////////////////
// @route   DELETE /api/scat/:id
// @access  Private/Admin
exports.deleteSubMenuCatAt = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const subMenuCatAt = await models.SubMenuCatAt.findOne({
    where: { subMenuCatAtId: id },
  });

  if (subMenuCatAt) {
    models.SubMenuCatAt.destroy({
      where: { subMenuCatAtId: id },
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
