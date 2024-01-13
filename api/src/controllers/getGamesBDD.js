const { Videogame, Genres } = require('../db');


const getGamesBDD = async(req, res)=>{
    try {
        const games = await Videogame.findAll({
            include:{
                model: Genres
            }
        });
        return res.status(200).json(games)

    } catch (error) {
        return res.status(400).json(error.message)
    }
};

module.exports = getGamesBDD;