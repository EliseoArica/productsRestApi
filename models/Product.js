const { Schema, model } = require('mongoose');

//Definiendo esquema del modelo Photo
const Product = new Schema({
    nombre: String,
    descripcion: String,
    precio: String,
    stock: String,
});

module.exports = model('Product', Product);