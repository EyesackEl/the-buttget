const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const transactionRoutes = require('./transactionRoutes');
const expenseRoutes = require('./expensesRoutes');
const subcat = require('./subcategoryRoutes');

router.use('/user', userRoutes);
router.use('/category', categoryRoutes)
router.use('/transaction', transactionRoutes)
router.use('/expense', expenseRoutes)
router.use('/subcategory', subcat)



module.exports = router;