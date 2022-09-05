const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createNewabout,
  getabout,
  aboutById,
  updateAboutById,
  deleteAbout,
} = require('../controllers/aboutController');

router.route('/').post(protect, createNewabout).get(getabout);

router
  .route('/:id')
  .get(aboutById)
  .put(protect, updateAboutById)
  .delete(protect, deleteAbout);

module.exports = router;
