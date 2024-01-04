const axios = require('axios');
require('dotenv').config();
const { DB_API_KEY } = process.env;
const URL = 'https://api.rawg.io/api/games';
const { Videogame } = require('../db');


const getAllVideoGames = async(req, res)=>{
    try {
        const { name } = req.query;
        
        //Base de Datos 
        const gameBDD = await Videogame.findAll({ where:{ name:name } });
        
        //API 
        const { data } = await axios.get(`${URL}?key=${DB_API_KEY}`);
        const findAll = data.results.map((videogame)=>{
            return  {
                id:videogame.id,
                name:videogame.name,
                slug:videogame.slug,
                rating:videogame.rating
            }
        })
        
        const allGames = [...findAll, ...gameBDD];
        const nameModif = name.toUpperCase();

        const gamesFiltered = allGames.filter((obj)=>{
            return obj.name.toUpperCase() === nameModif
        }); 

        if(name){
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