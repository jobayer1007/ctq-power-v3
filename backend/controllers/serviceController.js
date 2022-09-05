const asyncHandler = require('express-async-handler');
const { ServiceImage } = require('../models/index');
const models = require('../models/index');

// @desc    Create a new Service     ///////////////////////////////////////////////
// @route   POST /api/service
// @access  Private/SystemAdmin || Admin
exports.createNewService = asyncHandler(async (req, res) => {
  const { name, summary, details } = req.body;
  const titleExists = await models.Service.findOne({
    where: { name: name },
  });
  if (titleExists) {
    res.status(400);
    throw new Error('title already exists');
  } else {
    const newService = await models.Service.create({
      name,
      summary,
      details,
    });
    if (newService) {
      res.json(newService);
    } else {
      res.status(400);
      throw new Error('Encountered problem while creating new Service');
    }
  }
});

// @desc    GET all Service     ///////////////////////////////////////////////
// @route   GET /api/service
// @access  Public
exports.getAllService = asyncHandler(async (req, res) => {
  const service = await models.Service.findAll({
    order: [['createdAt', 'ASC']],
    include: [
      {
        model: ServiceImage,
      },
    ],
  });
  if (service && service.length !== 0) {
    res.send(service);
  } else {
    res.status(404);
    throw new Error('No Service');
  }
});

// @desc    Get a Service by Id     ///////////////////////////////////////////////
// @route   GET /api/service/:id
// @access  Public
exports.ServiceById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const service = await models.Service.findOne({
    where: { serviceId: id },
    include: [
      {
        model: ServiceImage,
      },
    ],
  });

  if (service) {
    res.json(service);
  } else {
    res.status(404);
    throw new Error('Service not found');
  }
});

// @desc   Update a Service by Id      ///////////////////////////////////////////////
// @route   PUT /api/service/:id
// @access  Private/Admin || SystemAdmin
exports.updateServiceById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const service = await models.Service.findOne({
    where: { serviceId: id },
  });

  if (service) {
    const data = {
      name: req.body.name || service.name,
      summary: req.body.summary || service.summary,
      details: req.body.details || service.details,
    };

    let { name, summary, details } = data;
    const updatedService = await models.Service.update(
      {
        name,
        summary,
        details,
      },
      { where: { serviceId: id } }
    );

    if (updatedService == 1) {
      res.send('Service update successful');
    } else {
      res.status(400);
      throw new Error('Service update unsuccessful');
    }
  } else {
    res.status(404);
    throw new Error('Service not found');
  }
});

// @desc    Delete a Service     ///////////////////////////////////////////////
// @route   DELETE /api/service/:id
// @access  Private/Admin
exports.deleteService = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const service = await models.Service.findOne({
    where: { serviceId: id },
  });

  if (service) {
    models.Service.destroy({
      where: { serviceId: id },
    })
      .then((num) => {
        if (num == 1) {
          res.json('Service has been deleted successfully');
        } else {
          res.status(400);
          throw new Error('Cannot delete the Service');
        }
      })
      .catch((err) => console.log(err));
  } else {
    res.status(404);
    throw new Error('Service not found');
  }
});

////////////////////////////////// Service Image ////////////////////////////

// @desc    Add a new Service Image     ///////////////////////////////////////////////
// @route   POST /api/Service/image
// @access  Private/SystemAdmin || admin
exports.addNewServiceImage = asyncHandler(async (req, res) => {
  const { serviceId, imageTitle, image } = req.body;

  const service = await models.Service.findOne({
    where: { serviceId: serviceId },
  });
  if (service) {
    const t = await sequelize.transaction();

    try {
      for (let i = 0; i < image.length; i++) {
        await models.ServiceImage.create(
          {
            serviceId: serviceId,
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
    throw new Error('Invalid Service reference');
  }
});

// @desc    Delete a Service     ///////////////////////////////////////////////
// @route   DELETE /api/service/image/:id
// @access  Private/Admin
exports.deleteServiceImage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const image = await models.ServiceImage.findOne({
    where: { imageId: id },
  });

  if (image) {
    models.ServiceImage.destroy({
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
