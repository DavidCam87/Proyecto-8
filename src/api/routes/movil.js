const { isAdmin, isAuth } = require("../../middlewares/auth");
const selectFolder = require("../../middlewares/file");
const { getMoviles, postMovil, getMovilById, putMovil, deleteMovil } = require("../controllers/movil");
const movilRoutes = require("express").Router();

movilRoutes.get("/", [isAuth], getMoviles);
movilRoutes.get("/:id", [isAuth], getMovilById);
movilRoutes.post("/", [isAdmin], selectFolder("moviles").single("image"), postMovil);
movilRoutes.put("/:id", [isAdmin], selectFolder("moviles").single("image"), putMovil);
movilRoutes.delete("/:id", [isAdmin], deleteMovil);

module.exports = movilRoutes;