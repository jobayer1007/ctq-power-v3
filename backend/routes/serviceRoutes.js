const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createNewService,
  getAllService,
  addNewServiceImage,
  deleteServiceImage,
  ServiceById,
  updateServiceById,
  deleteService,
} = require('../controllers/serviceController');

router.route('/').post(protect, createNewService).get(getAllService);
router.route('/image').post(protect, addNewServiceImage);
router.route('/image/:id').delete(protect, deleteServiceImage);
router
  .route('/:id')
  .get(ServiceById)
  .put(protect, updateServiceById)
  .delete(protect, deleteService);

module.exports = router;
