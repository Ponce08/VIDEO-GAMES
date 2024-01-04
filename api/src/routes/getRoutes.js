const { Router } = require('express');
const getAllVideoGames = require('../controllers/getAllVideoGames');
const getById = require('../controllers/getById');
const getRout = Router();



getRout.get('/genres', (req, res)=>{
    res.status(200).send('ve los genres')
})

getRout.get('/', getAllVideoGames);

getRout.get('/:id', getById);


module.exports = getRout