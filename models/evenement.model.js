const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const evenementSchema = new Schema({
    titre: {
        type: String,
    },
    date: {
        type: String,
    },
    adresse: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    uri: {
        type: String,
    },
}, { timestamps: true});

const Evenement = mongoose.model('Evenement', evenementSchema);

module.exports = Evenement