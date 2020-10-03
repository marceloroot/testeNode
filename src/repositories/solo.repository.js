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

exports.diferenca = async(hexa1,hexa2) =>{

    const hexToRgb = hex =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
               ,(m, r, g, b) => '#' + r + r + g + g + b + b)
      .substring(1).match(/.{2}/g)
      .map(x => parseInt(x, 16));
  

    
      const rgb1 = hexToRgb(hexa1);
      const rgb2 = hexToRgb(hexa2);
      
     
    
     
      
      
       
        const [ r1, g1, b1 ] = rgb1;
        const  [ r2, g2, b2 ] = rgb2;

       
           
          const drp2 = Math.pow((r1 - r2), 2);
          const dgp2 = Math.pow((g1 - g2), 2);
          const dbp2 = Math.pow((b1 - b2), 2);
          const t = (r1 + r2) / 2;
           
       
           const resposta = Math.sqrt(2 * drp2 + 4 * dgp2 + 3 * dbp2 + t * (drp2 - dbp2) / 256)
         // console.log(resposta);
           return String(resposta);
       
    


  //console.log(hexToRgb("#0033ff")) // [0, 51, 255]
 // console.log(hexToRgb("#03f")) // [0, 51, 255]


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








