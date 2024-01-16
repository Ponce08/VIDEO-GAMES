const axios = require('axios');
require('dotenv').config();
const { DB_API_KEY } = process.env;
const URL = 'https://api.rawg.io/api/games'
const { Videogame } = require('../db');


const getAllGames = async(req, res)=>{
    try {
        //BDD 
        const gamesBDD = await Videogame.findAll();

        // API
        let gamesAPI = [];
        let i = 1;

        while (i < 8) {
            const { data } = await axios.get(`${URL}?key=${DB_API_KEY}&page=${i}`)
                let j = 0;
                while (j < 20) {
                    gamesAPI.push({
                                id:data.results[j].id,
                                name:data.results[j].name,
                                image:data.results[j].background_image,
                                genres:data.results[j].genres,
                                rating:data.results[j].rating
                            })
                    j++
                }
            i++
        }
        const allGames = [...gamesAPI, ...gamesBDD];

    
        return res.status(200).json(allGames);

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = getAllGames;