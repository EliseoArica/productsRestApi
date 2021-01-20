const { Schema, model } = require('mongoose');

//Definiendo esquema del modelo Photo
const Product = new Schema({
    descripcion: String,
    precio: String,
});

module.exports = model('Product', Product);