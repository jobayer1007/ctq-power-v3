const asyncHandler = require('express-async-handler');
const models = require('../models/index');

// @desc    Create a new contact     ///////////////////////////////////////////////
// @route   POST /api/contact
// @access  Private/SystemAdmin || Admin
exports.createNewContact = asyncHandler(async (req, res) => {
  const { title, address, phone, email } = req.body;
  const titleExists = await models.Contact.findOne({
    where: { title: title },
  });
  if (titleExists) {
    res.status(400);
    throw new Error('title already exists');
  } else {
    const newcontact = await models.Contact.create({
      title,
      address,
      phone,
      email,
    });
    if (newcontact) {
      res.json(newcontact);
    } else {
      res.status(400);
      throw new Error('Encountered problem while creating new contact us');
    }
  }
});

// @desc    GET all contact     ///////////////////////////////////////////////
// @route   GET /api/contact
// @access  Public
exports.getContact = asyncHandler(async (req, res) => {
  const contact = await models.Contact.findAll();
  if (contact && contact.length !== 0) {
    res.send(contact);
  } else {
    res.status(404);
    throw new Error('No contact us info');
  }
});

// @desc    Get a contact by Id     ///////////////////////////////////////////////
// @route   GET /api/contact/:id
// @access  Public
exports.contactById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await models.Contact.findOne({
    where: { contactId: id },
  });

  if (contact) {
    res.json(contact);
  } else {
    res.status(404);
    throw new Error('contact not found');
  }
});

// @desc   Update a contact by Id      ///////////////////////////////////////////////
// @route   PUT /api/contact/:id
// @access  Private/Admin || SystemAdmin
exports.updateContactById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await models.Contact.findOne({
    where: { contactId: id },
  });

  if (contact) {
    const data = {
      title: req.body.title || contact.title,
      address: req.body.address || contact.address,
      phone: req.body.phone || contact.phone,
      email: req.body.email || contact.email,
    };

    let { title, address, phone, email } = data;
    const updatedcontact = await models.Contact.update(
      {
        title,
        address,
        phone,
        email,
      },
      { where: { contactId: id } }
    );

    if (updatedcontact == 1) {
      res.send('contact update successful');
    } else {
      res.status(400);
      throw new Error('contact update unsuccessful');
    }
  } else {
    res.status(404);
    throw new Error('contact not found');
  }
});

// @desc    Delete a contact     ///////////////////////////////////////////////
// @route   DELETE /api/contact/:id
// @access  Private/Admin
exports.deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await models.Contact.findOne({
    where: { contactId: id },
  });

  if (contact) {
    models.Contact.destroy({
      where: { contactId: id },
    })
      .then((num) => {
        if (num == 1) {
          res.json('contact has been deleted successfully');
        } else {
          res.status(400);
          throw new Error('Cannot delete the contact');
        }
      })
      .catch((err) => console.log(err));
  } else {
    res.status(404);
    throw new Error('contact not found');
  }
});
