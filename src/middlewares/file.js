const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require("multer-storage-cloudinary")

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Proyecto8",
    allowedFormats: ['jpg', 'png', 'gif', 'svg', "jpeg", "webp"]
  }
});
const upload = multer({ storage });
module.exports = upload;