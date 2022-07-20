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


// delete subcategory
router.delete('/delete', withAuth, async (req, res) => {
    try {

      const subCatQuery = req.query.subCategory_id;
      const subCat = await Subcategory.destroy({
        where: {
          id: subCatQuery,
          user_id: req.session.user_id,
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  

module.exports = router;