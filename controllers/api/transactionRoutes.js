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


router.delete('/:id', withAuth, async (req, res) => {
    try {
      const projectData = await Transaction.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200)
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;