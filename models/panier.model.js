const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const panierSchema = new Schema({
    
        idArt: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Art'}

}, { timestamps: true});

const Panier = mongoose.model('Panier', panierSchema);

module.exports = Panier