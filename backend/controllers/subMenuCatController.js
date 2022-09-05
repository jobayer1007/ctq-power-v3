const asyncHandler = require('express-async-handler');
const { SubMenu, SubMenuCat } = require('../models/index');
const models = require('../models/index');

// @desc    Create a new Sub-Menu Category    ///////////////////////////////////////////////
// @route   POST /api/cat
// @access  Private/SystemAdmin || Admin
exports.createNewSubMenuCat = asyncHandler(async (req, res) => {
  const { subMenuId, title, details, image } = req.body;
  const titleExists = await models.SubMenuCat.findOne({
    where: { title: title, subMenuId: subMenuId },
  });
  if (titleExists) {
    res.status(400);
    throw new Error('title already exists');
  } else {
    const newSubMenuCat = await models.SubMenuCat.create({
      title,
      details,
      image,
      subMenuId,
    });
    if (newSubMenuCat) {
      res.json(newSubMenuCat);
    } else {
      res.status(400);
      throw new Error(
        'Encountered problem while creating new Sub-Menu Category'
      );
    }
  }
});

// @desc    GET all Sub Menu Cat     ///////////////////////////////////////////////
// @route   GET /api/cat
// @access  Public
exports.getAllSubMenuCat = asyncHandler(async (req, res) => {
  const subMenuCat = await models.SubMenuCat.findAll({
    order: [['createdAt', 'DESC']],
  });
  if (subMenuCat && subMenuCat.length !== 0) {
    res.send(subMenuCat);
  } else {
    res.status(404);
    throw new Error('No Sub Menu Cat');
  }
});

// @desc    Get a Sub Menu Cat by Id     ///////////////////////////////////////////////
// @route   GET /api/cat/:id
// @access  Public
exports.subMenuCatById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const subMenuCat = await models.SubMenuCat.findOne({
    where: { subMenuCatId: id },
  });

  if (subMenuCat) {
    res.json(subMenuCat);
  } else {
    res.status(404);
    throw new Error('Sub-Menu cat not found');
  }
});

// @desc   Update a Sub Menu Cat by Id      ///////////////////////////////////////////////
// @route   PUT /api/cat/:id
// @access  Private/Admin || SystemAdmin
exports.updateSubMenuCatById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const subMenuCat = await models.SubMenuCat.findOne({
    where: { subMenuCatId: id },
  });

  if (subMenuCat) {
    const data = {
      title: req.body.title || subMenuCat.title,
      details: req.body.details || subMenuCat.details,
      image: req.body.image || subMenuCat.image,
    };

    let { title, details, image } = data;
    const updatedSubMenuCat = await models.subMenuCat.update(
      {
        title,
        details,
        image,
      },
      { where: { subMenuCatId: id } }
    );

    if (updatedSubMenuCat == 1) {
      res.send('Sub-Menu Cat update successful');
    } else {
      res.status(400);
      throw new Error('Sub-Menu Cat update unsuccessful');
    }
  } else {
    res.status(404);
    throw new Error('Sub-Menu Cat not found');
  }
});

// @desc    Delete a Sub Menu Cat     ///////////////////////////////////////////////
// @route   DELETE /api/cat/:id
// @access  Private/Admin
exports.deleteSubMenuCat = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const subMenuCat = await models.SubMenuCat.findOne({
    where: { subMenuCatId: id },
  });

  if (subMenuCat) {
    models.SubMenuCat.destroy({
      where: { subMenuCatId: id },
    })
      .then((num) => {
        if (num == 1) {
          res.json('Sub-Menu Cat has been deleted successfully');
        } else {
          res.status(400);
          throw new Error('Cannot delete the Sub-Menu Cat');
        }
      })
      .catch((err) => console.log(err));
  } else {
    res.status(404);
    throw new Error('Sub-Menu Cat not found');
  }
});
