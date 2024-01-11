const { Router } = require('express');
const postGame = require('../controllers/postGame');
const postRout = Router();

postRout.post('/post_game', postGame);


module.exports = postRout;