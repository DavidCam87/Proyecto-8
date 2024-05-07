const { isAdmin, isAuth } = require("../../middlewares/auth");
const selectFolder = require("../../middlewares/file");
const { getMarcas, getMarcaById, putMarca, postMarca, deleteMarca } = require("../controllers/marca");
const marcaRoutes = require("express").Router();

marcaRoutes.get('/', [isAuth], getMarcas);
marcaRoutes.post('/', [isAdmin], selectFolder("marcas").single("image"), postMarca);
marcaRoutes.get('/:id', [isAuth], getMarcaById);
marcaRoutes.delete('/:id', [isAdmin], deleteMarca);
marcaRoutes.put('/:id', [isAdmin], selectFolder("marcas").single("image"), putMarca);

module.exports = marcaRoutes;