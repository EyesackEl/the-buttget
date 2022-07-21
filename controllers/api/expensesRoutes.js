const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Expense } = require('../../models');

router.post('/add', withAuth, async (req, res) => {
    try{
        
        console.log(1)
        const create = Expense.create({
            name: req.body.name,
            user_id: req.session.user_id,
            category_id: req.body.catID,
            subcategory_id: req.body.subcatID
        })
        res.status(200).json(create);
    } catch (err) {
        res.status(406).json(err)
    }
});

module.exports = router;