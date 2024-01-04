const axios = require('axios');
require('dotenv').config();
const { DB_API_KEY } = process.env;
const URL = 'https://api.rawg.io/api/games'
const { Videogame } = require('../db')


const getById = async(req, res)=>{
    try {
        const { id } = req.params;
        
        if(!isNaN(id)){
            const { data } = await axios.get(`${URL}/${id}?key=${DB_API_KEY}`);

                const videoGame = {
                id:data.id,
                name:data.name,
                slug:data.slug,
                rating:data.rating
            }
            return res.status(200).json(videoGame);

        }else{
            const gameBdd = await Videogame.findByPk(id)
            return res.status(200).json(gameBdd);
        }

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = getById;