const { Router } = require('express');
const getRout  = require('./getRoutes');
const postRout = require('./postRoutes');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js')
const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', getRout);

router.use('/videogames', postRout);



module.exports = router;
