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

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const projectData = await Expense.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(projectData)
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;