const axios = require('axios');
require('dotenv').config();
const { DB_API_KEY } = process.env;
const URL = 'https://api.rawg.io/api/genres'


const getGenres = async(req, res)=>{
    try {
        const { data } = await axios(`${URL}?key=${DB_API_KEY}`);
        const allGenres = data.results.map((genre)=>{
            return genre.name
        });

        return res.status(200).json(allGenres)

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = getGenres;