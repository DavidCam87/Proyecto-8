const { deleteFile } = require("../../utils/deleteFile");
const { generateSing } = require("../../utils/jwt");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      rol: "user"
    });
    const userDuplicated = await User.findOne({ userName: req.body.userName });
    if (req.file) {
      newUser.image = req.file.path;
    }
    if (userDuplicated) {
      return res.status(400).json("Nombre de usuario no existe");
    }
    const userSaved = await newUser.save();
    return res.status(200).json(userSaved);
  } catch (error) {
    return res.status(500).json("error en el Registro" + error.message);
  };
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json("error en el Get" + error.message);
  };
};

const deleteUser = async (req, res, next) => {
  try {
    const userDeleted = await User.findByIdAndDelete(req.params.id);
    deleteFile(userDeleted.image);
    return res.status(200).json({
      mensaje: "usuario eliminado con exito",
      userDeleted
    });
  } catch (error) {
    return res.status(500).json("error en el Delete" + error.message);
  };
};

const putUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newUser = new User(req.body);
    newUser._id = id;
    const updatedUser = await User.findByIdAndUpdate(id, newUser, { new: true });
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json("error en el Put" + error.message);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = generateSing(user._id);
        return res.status(200).json({ user, token });
      } else {
        return res.status(400).json("Usuario o contraseña incorrecta");
      }
    } else {
      return res.status(400).json("Usuario o contraseña incorrecta");
    }
  } catch (error) {
    return res.status(400).json(error.message);
  };
};

module.exports = { register, deleteUser, getUsers, putUser, login };