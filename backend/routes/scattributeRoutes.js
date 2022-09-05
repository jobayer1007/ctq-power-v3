const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createNewSubMenuCatAt,
  getAllSubMenuCatAt,
  subMenuCatAtById,
  updateSubMenuCatAtById,
  deleteSubMenuCatAt,
} = require('../controllers/subMenuCatAtController');

router.route('/').post(protect, createNewSubMenuCatAt).get(getAllSubMenuCatAt);

router
  .route('/:id')
  .get(subMenuCatAtById)
  .put(protect, updateSubMenuCatAtById)
  .delete(protect, deleteSubMenuCatAt);

module.exports = router;
