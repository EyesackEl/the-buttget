const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const subcategoryRoutes = require('./subcategoryRoutes');
const transactionRoutes = require('./transactionRoutes');
const expenseRoutes = require('./expensesRoutes')

router.use('/user', userRoutes);
router.use('/category', categoryRoutes)
router.use('/subcategory', subcategoryRoutes)
router.use('/transaction', transactionRoutes)
router.use('/expense', expenseRoutes)


module.exports = router;