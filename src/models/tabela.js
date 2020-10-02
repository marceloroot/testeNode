'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    hexa: {
        type: String,
        required: true,
        trim: true
    },
    descricao: {
        type: String,
    },
    mineral:{
        type:String,
    },
    formula:{
        type: String,
    
    },
    munsell: {
        type: String,
        required: true,
        
    },
    nomecor:{
        type:String,
    }
  


});


module.exports = mongoose.model('Tabela', schema);