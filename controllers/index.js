const router = require('express').Router();

const apiRoutes = require('./api');
const homepageRoutes = require('./homepage-route.js');
const dashboardRoutes = require('./dashboard.js');

router.use('/', homepageRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;