const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User } = require('../../models');


router.put('/', withAuth, async (req, res) => {
    try{
        
        console.log(1)
        const create = User.update(
            {
            income: req.body.value
            },
            {
                where: {
                    id: req.session.user_id
                }
            }
            )
        res.status(200).json(create);
    } catch (err) {
        res.status(406).json(err)
    }
});

module.exports = router;



