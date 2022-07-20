const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const subcategoryRoutes = require('./subcategoryRoutes')

router.use('/login', userRoutes);
router.use('/signup', userRoutes);
router.use('/addCategory', categoryRoutes)
router.use('/addSubcategory', subcategoryRoutes)
router.use('/subcategory', subcategoryRoutes)


module.exports = router;