const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require("multer-storage-cloudinary")


function selectFolder(folderName) {
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: `Proyecto8/${folderName}`, // Ruta de la carpeta en Cloudinary
      allowedFormats: ['jpg', 'png', 'gif', 'svg', 'jpeg', 'webp']
    }
  });

  return multer({ storage });
}

module.exports = selectFolder;


/* const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Proyecto8",
    allowedFormats: ['jpg', 'png', 'gif', 'svg', "jpeg", "webp"]
  }
});
const upload = multer({ storage });
module.exports = upload; */