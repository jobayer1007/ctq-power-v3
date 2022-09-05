const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createNewIntro,
  getIntro,
  updateIntroById,
  deleteIntro,
  introById,
} = require('../controllers/introController');

router.route('/').post(protect, createNewIntro).get(getIntro);
router
  .route('/:id')
  .get(introById)
  .put(protect, updateIntroById)
  .delete(protect, deleteIntro);

module.exports = router;
