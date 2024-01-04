const axios = require('axios');
require('dotenv').config();
const { DB_API_KEY } = process.env;
const URL = 'https://api.rawg.io/api/games';
const { Videogame } = require('../db');


const getAllVideoGames = async(req, res)=>{
    try {
        //Base de Datos 
        const gameBDD = await Videogame.findAll();
        
        //API 
        const { data } = await axios.get(`${URL}?key=${DB_API_KEY}`);
        const gameAPI = data.results.map((videogame)=>{
            return  {
                id:videogame.id,
                name:videogame.name,
                slug:videogame.slug,
                rating:videogame.rating
            }
        })
        
        const allGames = [...gameAPI, ...gameBDD];
        
        const { name } = req.query;
        
        if(name){
            const gamesFiltered = allGames.filter((obj)=>{
                return obj.name.toUpperCase() === name.toUpperCase()
            }); 

            if(gamesFiltered){
                return res.status(200).json(gamesFiltered);
            }
            return res.status(400).send('Not found')
        };
        
        return res.status(200).json(allGames);

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = getAllVideoGames;