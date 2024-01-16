const { Router } = require('express');
const getById = require('../controllers/getById');
const getGenres = require('../controllers/getGenres');
const getGameByName = require('../controllers/getGameByName');
const getAllGames = require('../controllers/allGames');
const genresBDD = require('../controllers/genresBDD');
const getRout = Router();


// todos los juegos
getRout.get('/', getAllGames);

// rutas generales
getRout.get('/genres', getGenres);
getRout.get('/', getGameByName);
getRout.get('/:id', getById);

// ruta para agregar los generos a la BDD
getRout.get('/genres_post', genresBDD);


module.exports = getRout