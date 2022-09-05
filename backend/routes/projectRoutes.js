const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createNewProject,
  getAllProject,
  projectById,
  updateProjectById,
  deleteProject,
  addNewProjectImage,
  deleteProjectImage,
} = require('../controllers/projectController');

router.route('/').post(protect, createNewProject).get(getAllProject);
router.route('/image').post(protect, addNewProjectImage);
router.route('/image/:id').delete(protect, deleteProjectImage);
router
  .route('/:id')
  .get(projectById)
  .put(protect, updateProjectById)
  .delete(protect, deleteProject);

module.exports = router;
