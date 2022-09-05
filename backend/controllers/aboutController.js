const asyncHandler = require('express-async-handler');
const models = require('../models/index');

// @desc    Create a new aboutduction     ///////////////////////////////////////////////
// @route   POST /api/about
// @access  Private/SystemAdmin || Admin
exports.createNewabout = asyncHandler(async (req, res) => {
  const { title, body, image } = req.body;
  const titleExists = await models.About.findOne({
    where: { title: title },
  });
  if (titleExists) {
    res.status(400);
    throw new Error('title already exists');
  } else {
    const newabout = await models.About.create({
      title,
      body,
      image,
    });
    if (newabout) {
      res.json(newabout);
    } else {
      res.status(400);
      throw new Error('Encountered problem while creating new about us');
    }
  }
});

// @desc    GET all aboutduction     ///////////////////////////////////////////////
// @route   GET /api/about
// @access  Public
exports.getabout = asyncHandler(async (req, res) => {
  const about = await models.About.findAll();
  if (about && about.length !== 0) {
    res.send(about);
  } else {
    res.status(404);
    throw new Error('No About us info');
  }
});

// @desc    Get a aboutduction by Id     ///////////////////////////////////////////////
// @route   GET /api/about/:id
// @access  Public
exports.aboutById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const about = await models.About.findOne({
    where: { aboutId: id },
  });

  if (about) {
    res.json(about);
  } else {
    res.status(404);
    throw new Error('About not found');
  }
});

// @desc   Update a about by Id      ///////////////////////////////////////////////
// @route   PUT /api/about/:id
// @access  Private/Admin || SystemAdmin
exports.updateAboutById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const about = await models.About.findOne({
    where: { aboutId: id },
  });

  if (about) {
    const data = {
      title: req.body.title || about.title,
      body: req.body.body || about.body,
      image: req.body.image || about.image,
    };

    let { title, body, image } = data;
    const updatedabout = await models.About.update(
      {
        title,
        body,
        image,
      },
      { where: { aboutId: id } }
    );

    if (updatedabout == 1) {
      res.send('About update successful');
    } else {
      res.status(400);
      throw new Error('About update unsuccessful');
    }
  } else {
    res.status(404);
    throw new Error('aboutduction not found');
  }
});

// @desc    Delete a aboutduction     ///////////////////////////////////////////////
// @route   DELETE /api/about/:id
// @access  Private/Admin
exports.deleteAbout = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const about = await models.About.findOne({
    where: { aboutId: id },
  });

  if (about) {
    models.About.destroy({
      where: { aboutId: id },
    })
      .then((num) => {
        if (num == 1) {
          res.json('About has been deleted successfully');
        } else {
          res.status(400);
          throw new Error('Cannot delete the About');
        }
      })
      .catch((err) => console.log(err));
  } else {
    res.status(404);
    throw new Error('About not found');
  }
});
