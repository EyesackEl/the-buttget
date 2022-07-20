const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Subcategory } = require('../../models');


// add new subcategory route
router.post('/add', withAuth, async (req, res) => {
    try{
        Subcategory.create({
            name: req.body.name,
            user_id: req.session.user_id,
        })
    } catch (err) {
        res.status(400).json(err)
    }
});

  

module.exports = router;