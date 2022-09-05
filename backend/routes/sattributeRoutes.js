const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createNewSubMenuAt,
  getAllSubMenuAt,
  subMenuAtById,
  updateSubMenuAtById,
  deleteSubMenuAt,
} = require('../controllers/subMenuAtController');

router.route('/').post(protect, createNewSubMenuAt).get(getAllSubMenuAt);

router
  .route('/:id')
  .get(subMenuAtById)
  .put(protect, updateSubMenuAtById)
  .delete(protect, deleteSubMenuAt);

module.exports = router;
