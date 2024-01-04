const { Videogame } = require('../db');

const postGame = async(req, res)=>{
    try {
        const { name, description, imagen, platforms, fecha_De_Lanzamiento, rating } = req.body;

        if(name && description && imagen && platforms && fecha_De_Lanzamiento && rating){
            const videogame = await Videogame.create({
                name, 
                description, 
                imagen,
                platforms, 
                fecha_De_Lanzamiento,
                rating
            })
            return res.status(200).json(videogame)
        }
        return res.status(400).send('faltan datos');

    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = postGame;