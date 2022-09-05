const asyncHandler = require('express-async-handler');
const models = require('../models/index');

// @desc    Create a new Introduction     ///////////////////////////////////////////////
// @route   POST /api/intro
// @access  Private/SystemAdmin || Admin
exports.createNewIntro = asyncHandler(async (req, res) => {
  const { title, body, image } = req.body;
  const titleExists = await models.Introduction.findOne({
    where: { title: title },
  });
  if (titleExists) {
    res.status(400);
    throw new Error('title already exists');
  } else {
    const newIntro = await models.Introduction.create({
      title,
      body,
      image,
    });
    if (newIntro) {
      res.json(newIntro);
    } else {
      res.status(400);
      throw new Error('Encountered problem while creating new Introduction');
    }
  }
});

// @desc    GET all Introduction     ///////////////////////////////////////////////
// @route   GET /api/intro
// @access  Public
exports.getIntro = asyncHandler(async (req, res) => {
  const intro = await models.Introduction.findAll();
  if (intro && intro.length !== 0) {
    res.send(intro);
  } else {
    res.status(404);
    throw new Error('No Introduction');
  }
});

// @desc    Get a Introduction by Id     ///////////////////////////////////////////////
// @route   GET /api/intro/:id
// @access  Public
exports.introById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const intro = await models.Introduction.findOne({
    where: { introId: id },
  });

  if (intro) {
    res.json(intro);
  } else {
    res.status(404);
    throw new Error('Introduction not found');
  }
});

// @desc   Update a Introduction by Id      ///////////////////////////////////////////////
// @route   PUT /api/intro/:id
// @access  Private/Admin || SystemAdmin
exports.updateIntroById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const intro = await models.Introduction.findOne({
    where: { introId: id },
  });

  if (intro) {
    const data = {
      title: req.body.title || intro.title,
      body: req.body.body || intro.body,
      image: req.body.image || intro.image,
    };

    let { title, body, image } = data;
    const updatedIntro = await models.Introduction.update(
      {
        title,
        body,
        image,
      },
      { where: { introId: id } }
    );

    if (updatedIntro == 1) {
      res.send('Introduction update successful');
    } else {
      res.status(400);
      throw new Error('Introduction update unsuccessful');
    }
  } else {
    res.status(404);
    throw new Error('Introduction not found');
  }
});

// @desc    Delete a Introduction     ///////////////////////////////////////////////
// @route   DELETE /api/intro/:id
// @access  Private/Admin
exports.deleteIntro = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const intro = await models.Introduction.findOne({
    where: { introId: id },
  });

  if (intro) {
    models.Introduction.destroy({
      where: { introId: id },
    })
      .then((num) => {
        if (num == 1) {
          res.json('Introduction has been deleted successfully');
        } else {
          res.status(400);
          throw new Error('Cannot delete the Introduction');
        }
      })
      .catch((err) => console.log(err));
  } else {
    res.status(404);
    throw new Error('Introduction not found');
  }
});
