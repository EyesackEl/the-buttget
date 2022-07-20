const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const subcategoryRoutes = require('./subcategoryRoutes')

router.use('/user', userRoutes);
router.use('/addCategory', categoryRoutes)
router.use('/addSubcategory', subcategoryRoutes)


module.exports = router;