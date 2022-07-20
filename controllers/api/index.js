const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const subcategoryRoutes = require('./subcategoryRoutes')

router.use('/user', userRoutes);
router.use('/category', categoryRoutes)
router.use('/Subcategory', subcategoryRoutes)


module.exports = router;