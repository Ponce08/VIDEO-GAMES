const { Router } = require('express');
const getById = require('../controllers/getById');
const getGenres = require('../controllers/getGenres');
const genresBDD = require('../controllers/genresBDD');
const getGameByName = require('../controllers/getGameByName');
const gamePage_uno = require('../controllers/allPagesGames/page_1');
const gamePage_siete = require('../controllers/allPagesGames/page_7');
const getGamesBDD = require('../controllers/getGamesBDD');
const getGenresBDD = require('../controllers/getGenresBDD');
const getRout = Router();


// paginado de todos los juegos
getRout.get('/page_1', gamePage_uno);
getRout.get('/page_5', gamePage_siete);

// rutas para relacion de tablas
getRout.get('/games_bdd', getGamesBDD);
getRout.get('/genres_bdd', getGenresBDD);


// rutas generales
getRout.get('/genres', getGenres);
getRout.get('/genres_post', genresBDD);
getRout.get('/', getGameByName);
getRout.get('/:id', getById);


module.exports = getRout