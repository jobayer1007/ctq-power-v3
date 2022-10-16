const express = require('express');
const path = require('path');
const multer = require('multer');

const router = express.Router();

// console.log('file upload..............................');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (process.env.NODE_ENV === 'development') {
      cb(null, 'uploads/');
    } else {
      cb(null, '/home/ctqpower/apps/ctqpower-app/uploads/');
    }
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// /jpg|png|gif|webp|tiff|psd|raw|bmp|heif|indd/

function checkFileType(file, cb) {
  const filetypes =
    /jpeg|jpg|png|gif|webp|tiff|psd|raw|bmp|heif|indd|svg|pdf|jfif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images or pdf Only!');
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post('/', upload.single('image'), (req, res) => {
  // console.log(req.file)
  res.send(`/uploads/${req.file.filename}`);
  // res.send(`/${req.file.path}`);
  // console.log(req.file.path)
});

module.exports = router;
