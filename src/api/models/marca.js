const mongoose = require('mongoose');

const marcaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  moviles: [{ type: mongoose.Types.ObjectId, ref: "moviles", required: false }],
},
  {
    timestamps: true,
    collection: 'marcas'
  }
);

const Marca = mongoose.model('marcas', marcaSchema, 'marcas');
module.exports = Marca;