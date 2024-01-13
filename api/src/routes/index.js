const { Router } = require('express');
const getRout  = require('./getRoutes');
const postRout = require('./postRoutes');

const router = Router();


router.use('/videogames', getRout);

router.use('/videogames', postRout);



module.exports = router;
