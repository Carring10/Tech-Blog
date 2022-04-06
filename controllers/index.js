const router = require('express').Router();

const apiRoutes = require('./api');
const homepageRoutes = require('./homepage-route.js');

router.use('/', homepageRoutes);
router.use('/api', apiRoutes);

module.exports = router;