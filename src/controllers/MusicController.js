const models = require('../models/models')


let add = async (req,res,next) =>{
    try {

        const {nombre,autor, genero, fecha_pub} = req.body;
        const newMusica = new models.Music({nombre,autor,genero, fecha_pub});
        await newMusica.save();
        res.status(200).json({message:"Datos insertados correctamente",newMusica});

    } catch (error) {

        res.status(404).send({message:'Error en el proceso'})
        next(error);

    }
}

let list = async (req,res,next) =>{
    try {

        const musicas = await models.Music.find();
        res.status(200).json(musicas);

    } catch (error) {

        res.status(404).send({message:'Error en el proceso'})
        next(error);

    }
}

let update = async (req,res,next) =>{
    try {

        const id = req.params._id;
        const {nombre,autor,genero, fecha_pub} = req.body;
        const updateMusica = await models.Music.findByIdAndUpdate({_id:id},{nombre,autor,genero,fecha_pub})
        res.status(200).json({message:"Actualizado", updateMusica});
        
    } catch (error) {
        res.status(404).send({message:'Error en el proceso'})
        next(error);
    }
}

let remove = async (req,res,next) =>{
    try {

        const eliminado = await models.Music.findByIdAndDelete(
            req.params._id
        );
        res.status(200).json(eliminado);

    } catch (error) {
        res.status(404).send({message:'Error en el proceso'})
        next(error);
    }
}

module.exports = {add, list, update, remove};