const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Transaction } = require('../../models');

router.post('/add', withAuth, async (req, res) => {
    try{
        
        console.log(1)
        const create = Transaction.create({
            value: req.body.value,
            user_id: req.session.user_id,
            category_id: req.body.catID,
            subcategory_id: req.body.subcatID,
            expense_id: req.body.expenseID
        })
        res.status(200).json(create);
    } catch (err) {
        res.status(406).json(err)
    }
});



module.exports = router;