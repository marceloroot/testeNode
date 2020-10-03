'use strict'
const mongoose =require('mongoose');
const tabela = require('../models/tabela');
const Tabela = mongoose.model('Tabela');

exports.get = async() =>{
    const res =  await Tabela.find({
        active:true
       },'hexa descricao mineral formula Munsell nomecor');

       return res;
};

exports.create = async(data) =>{

  var tabela = new Tabela(data);
  await tabela.save();

};



exports.update = async(id,data) => {
   
    await Tabela
          .findByIdAndUpdate(id, {
           $set: {
            hexa: data.hexa,
            descricao: data.descricao,
            mineral: data.mineral,
            formula: data.formula,
            munsell: data.munsell,
            nomecor: data.nomecor
        }
    });
};

exports.delete = async(id) =>{
    await Tabela.findOneAndRemove(id);
}








