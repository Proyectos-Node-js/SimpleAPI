const {Schema,model} = require('mongoose');

const ObjectId = Schema.ObjectId;

const MusicaSchema = new Schema({
    nombre      : {type:String, required:true, unique:false, maxlength:60}, 
    autor       : {type:String, required:true, maxlength:60},
    genero      : {type:String, required:true, maxlength:20},
    fecha_pub   : {type:Date, required:false}
})


module.exports = model("musicas",MusicaSchema);