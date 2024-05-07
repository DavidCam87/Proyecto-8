const { deleteFile } = require("../../utils/deleteFile");
const Movil = require("../models/movil");

const postMovil = async (req, res, next) => {
  try {
    const newMovil = new Movil(req.body);
    if (req.file) {
      newMovil.image = req.file.path;
    }
    const savedMovil = await newMovil.save();
    return res.status(201).json(savedMovil)
  } catch (error) {
    return res.status(500).json("error en el Post" + error.message);
  };
};

const getMoviles = async (req, res, next) => {
  try {
    const allMoviles = await Movil.find();
    return res.status(200).json(allMoviles);
  } catch (error) {
    return res.status(500).json("error en el Get" + error.message);
  };
};

const getMovilById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movilById = await Movil.findById(id);
    return res.status(200).json(movilById);
  } catch (error) {
    return res.status(500).json("error en el Get" + error.message);
  };
};

const putMovil = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newMovil = new Movil(req.body);
    newMovil._id = id;
    const oldMovil = await Movil.findById(id);
    if (req.file) {
      newMovil.image = req.file.path;
      deleteFile(oldMovil.image);
    } else {
      newMovil.image = req.body.image;
    }
    const updatedMovil = await Movil.findByIdAndUpdate(id, newMovil, { new: true });
    return res.status(200).json(updatedMovil);
  } catch (error) {
    return res.status(500).json("error en el Put ." + error.message);
  };
};

const deleteMovil = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedMovil = await Movil.findByIdAndDelete(id);
    deleteFile(deletedMovil.image);
    return res.status(200).json({
      mensaje: "imagen eliminada",
      deletedMovil
    });
  } catch (error) {
    return res.status(500).json("error en el Delete" + error.message);
  };
};

module.exports = { postMovil, getMoviles, getMovilById, putMovil, deleteMovil };