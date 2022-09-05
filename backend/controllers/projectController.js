const asyncHandler = require('express-async-handler');
const { ProjectImage } = require('../models/index');
const models = require('../models/index');

// @desc    Create a new Project     ///////////////////////////////////////////////
// @route   POST /api/project
// @access  Private/SystemAdmin || Admin
exports.createNewProject = asyncHandler(async (req, res) => {
  const { name, summary, details, image } = req.body;
  const titleExists = await models.Project.findOne({
    where: { name: name },
  });
  if (titleExists) {
    res.status(400);
    throw new Error('title already exists');
  } else {
    const newProject = await models.Project.create({
      name,
      summary,
      details,
      image,
    });
    if (newProject) {
      res.json(newProject);
    } else {
      res.status(400);
      throw new Error('Encountered problem while creating new Project');
    }
  }
});

// @desc    GET all Project     ///////////////////////////////////////////////
// @route   GET /api/project
// @access  Public
exports.getAllProject = asyncHandler(async (req, res) => {
  const project = await models.Project.findAll({
    order: [['createdAt', 'ASC']],
    include: [
      {
        model: ProjectImage,
      },
    ],
  });
  if (project && project.length !== 0) {
    res.send(project);
  } else {
    res.status(404);
    throw new Error('No Project');
  }
});

// @desc    Get a Project by Id     ///////////////////////////////////////////////
// @route   GET /api/project/:id
// @access  Public
exports.projectById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const project = await models.Project.findOne({
    where: { projectId: id },
    include: [
      {
        model: ProjectImage,
      },
    ],
  });

  if (project) {
    res.json(project);
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

// @desc   Update a Project by Id      ///////////////////////////////////////////////
// @route   PUT /api/project/:id
// @access  Private/Admin || SystemAdmin
exports.updateProjectById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const project = await models.Project.findOne({
    where: { projectId: id },
  });

  if (project) {
    const data = {
      name: req.body.name || project.name,
      summary: req.body.summary || project.summary,
      details: req.body.details || project.details,
      image: req.body.image || project.image,
    };

    let { name, summary, details, image } = data;
    const updatedProject = await models.Project.update(
      {
        name,
        summary,
        details,
        image,
      },
      { where: { projectId: id } }
    );

    if (updatedProject == 1) {
      res.send('Project update successful');
    } else {
      res.status(400);
      throw new Error('Project update unsuccessful');
    }
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

// @desc    Delete a Project     ///////////////////////////////////////////////
// @route   DELETE /api/project/:id
// @access  Private/Admin
exports.deleteProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const project = await models.Project.findOne({
    where: { projectId: id },
  });

  if (project) {
    models.Project.destroy({
      where: { projectId: id },
    })
      .then((num) => {
        if (num == 1) {
          res.json('Project has been deleted successfully');
        } else {
          res.status(400);
          throw new Error('Cannot delete the Project');
        }
      })
      .catch((err) => console.log(err));
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

////////////////////////////////// Project Image ////////////////////////////

// @desc    Add a new Project Image     ///////////////////////////////////////////////
// @route   POST /api/project/image
// @access  Private/SystemAdmin || admin
exports.addNewProjectImage = asyncHandler(async (req, res) => {
  const { projectId, imageTitle, image } = req.body;

  const project = await models.Project.findOne({
    where: { projectId: projectId },
  });
  if (project) {
    const t = await sequelize.transaction();

    try {
      for (let i = 0; i < image.length; i++) {
        await models.ProjectImage.create(
          {
            projectId: projectId,
            imageTitle: image[i].imageTitle,
            image: image[i],
          },
          { transaction: t }
        );
      }

      await t.commit();
      res.json(`New Image Added Successfully`);
    } catch (error) {
      await t.rollback();
      res.status(400);
      throw new Error(
        'Encountered problem while adding new image' + ' ' + error
      );
    }
  } else {
    res.status(404);
    throw new Error('Invalid project reference');
  }
});

// @desc    Delete a Project     ///////////////////////////////////////////////
// @route   DELETE /api/project/image/:id
// @access  Private/Admin
exports.deleteProjectImage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const image = await models.ProjectImage.findOne({
    where: { imageId: id },
  });

  if (image) {
    models.ProjectImage.destroy({
      where: { imageId: id },
    })
      .then((num) => {
        if (num == 1) {
          res.json('image has been deleted successfully');
        } else {
          res.status(400);
          throw new Error('Cannot delete the image');
        }
      })
      .catch((err) => console.log(err));
  } else {
    res.status(404);
    throw new Error('image not found');
  }
});
