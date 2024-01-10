const { Router } = require('express');
const getById = require('../controllers/getById');
const getGenres = require('../controllers/getGenres');
const genresBDD = require('../controllers/genresBDD');
const getGameByName = require('../controllers/getGameByName');
const gamePage_uno = require('../controllers/allPagesGames/page_1');
const gamePage_dos = require('../controllers/allPagesGames/page_2');
const gamePage_tres = require('../controllers/allPagesGames/page_3');
const gamePage_cuatro = require('../controllers/allPagesGames/page_4');
const gamePage_cinco = require('../controllers/allPagesGames/page_5');
const gamePage_seis = require('../controllers/allPagesGames/page_6');
const gamePage_siete = require('../controllers/allPagesGames/page_7');
const getRout = Router();


// paginado de todos los juegos
getRout.get('/page_1', gamePage_uno);
getRout.get('/page_2', gamePage_dos);
getRout.get('/page_3', gamePage_tres);
getRout.get('/page_4', gamePage_cuatro);
getRout.get('/page_5', gamePage_cinco);
getRout.get('/page_5', gamePage_seis);
getRout.get('/page_5', gamePage_siete);




getRout.get('/genres', getGenres);

getRout.get('/genres_post', genresBDD);

getRout.get('/', getGameByName);

getRout.get('/:id', getById);


module.exports = getRout