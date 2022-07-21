// this route is for updating and adding categories per user
const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Category, Subcategory } = require('../../models');


router.post('/add', withAuth, async (req, res) => {
    try{    
        console.log(1)
        const create = Category.create({
            name: req.body.name,
            user_id: req.session.user_id
        })
        res.status(200).json(create);
    } catch (err) {
        res.status(406).json(err)
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const catData = await Category.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!catData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(catData)
    } catch (err) {
      res.status(500).json(err);
    }
});



// SUBCAT DELETE ROUTE
// ---------------------------------------------------------------------------------------
router.delete('/sub/:id', withAuth, async (req, res) => {
    try {
      const catData = await Subcategory.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!catData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(catData)
    } catch (err) {
      res.status(500).json(err);
    }
});





module.exports = router;
