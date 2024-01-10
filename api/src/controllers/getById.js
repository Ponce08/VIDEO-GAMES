const axios = require('axios');
require('dotenv').config();
const { DB_API_KEY } = process.env;
const URL = 'https://api.rawg.io/api/games'
const { Videogame } = require('../db');
const { UUID } = require('sequelize');


const getById = async(req, res)=>{
    
    try {
        const { id } = req.params;
        
        if(Number(id)){
            const { data } = await axios.get(`${URL}/${id}?key=${DB_API_KEY}`);

                const videoGame = {
                                        id:data.id,
                                        name:data.name,
                                        image:data.background_image,
                                        platforms:data.platforms,
                                        description:data.description,
                                        released:data.released,
                                        rating:data.rating,
                                        genres:data.genres
                                  }

            return res.status(200).json(videoGame);
            
        };

        if(typeof UUID){
            const gameBdd = await Videogame.findByPk(id)
            return res.status(200).json(gameBdd);
        };

    } catch (error) {
        const { id } = req.params;
        return res.status(404).send(`el juego con id: ${id} no se encuentra en la base de datos`)
    }
};

module.exports = getById;