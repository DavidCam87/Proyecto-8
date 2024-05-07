const { isAdmin } = require("../../middlewares/auth");
const selectFolder = require("../../middlewares/file");
const { deleteUser, register, getUsers, putUser, login } = require("../controllers/user");
const userRoutes = require("express").Router();

userRoutes.get("/", [isAdmin], getUsers);
userRoutes.delete("/:id", [isAdmin], deleteUser);
userRoutes.put("/:id", [isAdmin], selectFolder("users").single("image"), putUser);
userRoutes.post("/register", selectFolder("users").single("image"), register);
userRoutes.post("/login", login);

module.exports = userRoutes;