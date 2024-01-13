const { Genres } = require('../db');


const getGenres = async(req, res)=>{
    try {
        const genresBDD = await Genres.findAll()

        return res.status(200).json(genresBDD)

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = getGenres;