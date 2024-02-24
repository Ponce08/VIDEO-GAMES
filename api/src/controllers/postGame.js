const { Videogame, Genres } = require('../db');

const postGame = async(req, res)=>{
    try {
        const { name, description, imagen, platforms, fecha_De_Lanzamiento, rating, generosBDD } = req.body;

            const videogame = await Videogame.create({
                name:name.toLowerCase(), 
                description, 
                imagen,
                platforms, 
                fecha_De_Lanzamiento,
                rating
            })
    
            for (let i = 0; i < generosBDD.length; i++) {
                let genreName = generosBDD[i];
                let genreDB = await Genres.findAll({where:{ name:genreName}});
                if(genreDB){
                    await videogame.addGenres(genreDB)
                }
            }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = postGame;