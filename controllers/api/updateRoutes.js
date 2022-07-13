// this route is for updating and adding categories per user
const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Category } = require('../../models/Category')

// update categories
router.post('/', withAuth, async (req, res) => {
    // update categories and information within
})

router.put('/add', withAuth, async (req, res) => {
    // add new category per user
})




module.exports = router;