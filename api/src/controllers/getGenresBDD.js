const { Videogame, Genres } = require('../db');


const getGenresBDD = async(req, res)=>{
    try {
        const games = await Genres.findAll({
            include:{
                model: Videogame
            }
        });
        return res.status(200).json(games)

    } catch (error) {
        return res.status(400).json(error.message)
    }
};

module.exports = getGenresBDD;