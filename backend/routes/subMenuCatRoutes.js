const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createNewSubMenuCat,
  getAllSubMenuCat,
  subMenuCatById,
  updateSubMenuCatById,
  deleteSubMenuCat,
} = require('../controllers/subMenuCatController');

router.route('/').post(protect, createNewSubMenuCat).get(getAllSubMenuCat);

router
  .route('/:id')
  .get(subMenuCatById)
  .put(protect, updateSubMenuCatById)
  .delete(protect, deleteSubMenuCat);

module.exports = router;
