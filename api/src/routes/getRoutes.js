const { Router } = require('express');
const getById = require('../controllers/getById');
const getGenres = require('../controllers/getGenres');
const getAllGames = require('../controllers/allGames');
const genres_bdd = require('../controllers/genres_bdd');
const getGameByName = require('../controllers/getGamesByName');


const getRout = Router();


// todos los juegos
getRout.get('/', getAllGames);

// rutas generales
getRout.get('/genres', getGenres);
getRout.get('/:id', getById);
getRout.get('/', getGameByName)

// ruta para agregar los generos a la BDD
getRout.get('/post_genres', genres_bdd)


module.exports = getRout