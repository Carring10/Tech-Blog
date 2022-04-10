const router = require('express').Router();

const apiRoutes = require('./api');
const homepageRoutes = require('./homepage-route.js');
const dashboardRoutes = require('./dashboard.js');
const newPostRoutes = require('./new-post-route.js');

router.use('/', homepageRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/new-post', newPostRoutes);

module.exports = router;