const { deleteFile } = require("../../utils/deleteFile");
const Marca = require("../models/marca");

const postMarca = async (req, res, next) => {
  try {
    const newMarca = new Marca(req.body);
    if (req.file) {
      newMarca.image = req.file.path
    }
    const savedMarca = await newMarca.save();
    return res.status(201).json(savedMarca)
  } catch (error) {
    return res.status(500).json("error en el Post" + error.message);
  };
};

const getMarcas = async (req, res, next) => {
  try {
    const allMarcas = await Marca.find().populate("moviles");
    return res.status(200).json(allMarcas);
  } catch (error) {
    return res.status(500).json("error en el Get" + error.message);
  };
};

const getMarcaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const marcaById = await Marca.findById(id).populate("moviles");
    return res.status(200).json(marcaById);
  } catch (error) {
    return res.status(500).json("error en el Get" + error.message);
  };
};

const putMarca = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldMarca = await Marca.findById(id);
    const newMarca = new Marca(req.body);
    newMarca._id = id;
    newMarca.moviles = [...oldMarca.moviles, ...req.body.moviles];
    const updatedMarca = await Marca.findByIdAndUpdate(id, newMarca, { new: true });
    return res.status(200).json(updatedMarca);
  } catch (error) {
    return res.status(500).json("error en el Put" + error.message);
  };
};

const deleteMarca = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedMarca = await Marca.findByIdAndDelete(id);
    deleteFile(deletedMarca.image);
    return res.status(200).json(deletedMarca);
  } catch (error) {
    return res.status(500).json("error en el Delete" + error.message);
  };
};

module.exports = { postMarca, getMarcas, getMarcaById, putMarca, deleteMarca };