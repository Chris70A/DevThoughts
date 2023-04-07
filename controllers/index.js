const router = require('express').Router();


const homeRoutes = require('../routes/home-routes');


router.use('/', homeRoutes);

module.exports = router;