const { isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const { getMoviles, postMovil, getMovilById, putMovil, deleteMovil } = require("../controllers/movil");
const movilRoutes = require("express").Router();

movilRoutes.get("/", getMoviles);
movilRoutes.get("/:id", getMovilById);
movilRoutes.post("/", [isAdmin], upload.single("image"), postMovil);
movilRoutes.put("/:id", [isAdmin], upload.single("image"), putMovil);
movilRoutes.delete("/:id", [isAdmin], deleteMovil);

module.exports = movilRoutes;