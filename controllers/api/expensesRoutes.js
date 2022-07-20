const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Expense } = require('../../models');

router.post('/add', withAuth, async (req, res) => {
    try{
        
        console.log(expenseQuery)
        Expense.create({
            name: req.body.name,
            user_id: req.session.user_id,
            category_id: req.body.catID,
            subcategory_id: req.body.subcatID
        })
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;