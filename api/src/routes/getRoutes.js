const { Router } = require('express');
const getAllVideoGames = require('../controllers/getAllVideoGames');
const getById = require('../controllers/getById');
const getGenres = require('../controllers/getGenres');
const genresBDD = require('../controllers/genresBDD');
const getRout = Router();



getRout.get('/genres', getGenres);

getRout.get('/genres_post', genresBDD);

getRout.get('/', getAllVideoGames);

getRout.get('/:id', getById);


module.exports = getRout