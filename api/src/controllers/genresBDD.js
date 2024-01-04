const axios = require('axios');
require('dotenv').config();
const { DB_API_KEY } = process.env;
const URL = 'https://api.rawg.io/api/genres'
const { Genres } = require('../db');


const genresBDD = async(req, res)=>{
    try {
        const { data } = await axios(`${URL}?key=${DB_API_KEY}`);
        const allGenres = data.results.map((genre)=>{
            return genre.name
        });

        const validateGenres = await Genres.findOne({where:{name:'Action'}});

        if(!validateGenres){
            allGenres.map(async(genre)=>{
               const genress = await Genres.create({
                    name:genre
                })
                return genress
            })
            return res.status(200).send('Generos agregados a la base de datos correctamente')
        }
        return res.status(200).send('Base de datos actualizada')

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = genresBDD;