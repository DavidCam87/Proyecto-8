const { isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const { getMarcas, getMarcaById, putMarca, postMarca, deleteMarca } = require("../controllers/marca");
const marcaRoutes = require("express").Router();

marcaRoutes.get('/', getMarcas);
marcaRoutes.post('/', [isAdmin], upload.single("image"), postMarca);
marcaRoutes.get('/:id', getMarcaById);
marcaRoutes.delete('/:id', [isAdmin], deleteMarca);
marcaRoutes.put('/:id', [isAdmin], upload.single("image"), putMarca);

module.exports = marcaRoutes;