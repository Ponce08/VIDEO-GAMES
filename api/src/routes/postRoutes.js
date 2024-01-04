const { Router } = require('express');
const postGame = require('../controllers/postGame');
const postRout = Router();

postRout.post('/', postGame);

module.exports = postRout;