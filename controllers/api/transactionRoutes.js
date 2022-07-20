const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Transaction } = require('../../models');

router.post('/add', withAuth, async (req, res) => {
    const subcatQuery = req.query.category_id;

    try{
        console.log(subcatQuery);

        Subcategory.create({
            name: req.body.name,
            user_id: req.session.user_id,
            category_id: req.body.catID,
        });
        
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;