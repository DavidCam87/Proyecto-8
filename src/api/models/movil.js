const mongoose = require('mongoose');

const movilSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  marca: { type: String, required: true }
},
  {
    timestamps: true,
    collection: 'moviles'
  }
);

const Movil = mongoose.model('moviles', movilSchema, 'moviles');
module.exports = Movil;