const axios = require('axios');
require('dotenv').config();
const { DB_API_KEY } = process.env;
const URL = 'https://api.rawg.io/api/games'
const { Videogame } = require('../db');


const getGameByName = async(req,res)=>{
    
    try {
        const { name } = req.query;

            if(name){
                        // Base de datos
                        const gamesBDD = await Videogame.findAll({where:{name: name.toLowerCase()}});
                        // API
                        const { data } = await axios.get(`${URL}?key=${DB_API_KEY}&search=${name}`);
                        const gamesAPI = data.results.map((game)=>{
                            return {
                                id:game.id,
                                name:game.name,
                                image:game.background_image,
                                genres:game.genres
                            }
                        });

                        const allGameByName = [...gamesAPI, ...gamesBDD]
                        return res.status(200).json(allGameByName);
                    };         
    } catch (error) {
        const { name } = req.query;
        return res.status(404).send(`el juego con nombre: ${name} no se encuentra en la base de datos`)
    }
};

module.exports = getGameByName;
