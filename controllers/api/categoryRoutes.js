// this route is for updating and adding categories per user
const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Category, Subcategory } = require('../../models');


// add new category per user
router.put('/add', withAuth, async (req, res) => {
    try{
        const postCategory = await Category.create({
            ...req.body,
            user_id: req.session.user_id
        })
    } catch (err) {
        res.status(400).json(err)
    }
});


// add new subcategory per user as well, attached to category
router.put('/sub', withAuth, async (req, res) => {
    try{
        Category.create({
            name: req.body.name,
            user_id: req.body.userid,
        })
    } catch (err) {
        res.status(400).json(err)
    }
});


router.put('/sub', withAuth, async (req, res) => {
    try{
        Subcategory.create({
            name: req.body.name,
            user_id: req.body.userid,
        })
    } catch (err) {
        res.status(400).json(err)
    }
});



module.exports = router;
