const axios = require('axios');
require('dotenv').config();
const { DB_API_KEY } = process.env;
const URL = 'https://api.rawg.io/api/games';


const gamePage_siete = async(req, res)=>{
    try {  
        //Base de Datos 
        const gamesBDD = await Videogame.findAll();
        //API 
        const { data } = await axios.get(`${URL}?key=${DB_API_KEY}&page=7`)
        const gamesAPI = data.results.map((game)=>{
            return {
                id:game.id,
                name:game.name,
                image:game.background_image,
                genres:game.genres
            }
        })
        const gamesAPI_2 = gamesAPI.slice(0, 15);

        const allGames = [...gamesAPI_2, ...gamesBDD];
        
        return res.status(200).json(allGames);

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = gamePage_siete;