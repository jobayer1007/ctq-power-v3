const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createNewMainMenuAt,
  getAllMainMenuAt,
  mainMenuAtById,
  updateMainMenuAtById,
  deleteMainMenuAt,
} = require('../controllers/mainMenuAtController');

router.route('/').post(protect, createNewMainMenuAt).get(getAllMainMenuAt);

router
  .route('/:id')
  .get(mainMenuAtById)
  .put(protect, updateMainMenuAtById)
  .delete(protect, deleteMainMenuAt);

module.exports = router;
