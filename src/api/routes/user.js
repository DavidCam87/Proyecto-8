const { isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const { deleteUser, register, getUsers, putUser, login } = require("../controllers/user");
const userRoutes = require("express").Router();

userRoutes.get("/", [isAdmin], getUsers);
userRoutes.delete("/:id", [isAdmin], deleteUser);
userRoutes.put("/:id", [isAdmin], upload.single("image"), putUser);
userRoutes.post("/register", upload.single("image"), register);
userRoutes.post("/login", login);

module.exports = userRoutes;