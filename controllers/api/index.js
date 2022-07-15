const router = require('express').Router();
const userRoutes = require('./userRoutes');
const updateRoutes = require('./updateRoutes');

router.use('/login', userRoutes);
router.use('/signup', userRoutes);
router.use('/add', updateRoutes)


module.exports = router;