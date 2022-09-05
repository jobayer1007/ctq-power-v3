const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createNewContact,
  getContact,
  contactById,
  updateContactById,
  deleteContact,
} = require('../controllers/contactController');

router.route('/').post(protect, createNewContact).get(getContact);

router
  .route('/:id')
  .get(contactById)
  .put(protect, updateContactById)
  .delete(protect, deleteContact);

module.exports = router;
