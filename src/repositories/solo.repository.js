'use strict'
const mongoose =require('mongoose');
const solo = require('../models/solo');
const Solo = mongoose.model('Solo');

exports.get = async() =>{
    const res =  await Solo.find({
        active:true
       },'hexa descricao');

       return res;
};

exports.create = async(data) =>{

  var solo = new Solo(data);
  await solo.save();

};



exports.update = async(id,data) => {
   
    await Solo
          .findByIdAndUpdate(id, {
           $set: {
            hexa: data.hexa,
            descricao: data.descricao
           
        }
    });
};

exports.delete = async(id) =>{
    await Solo.findOneAndRemove(id);
}








