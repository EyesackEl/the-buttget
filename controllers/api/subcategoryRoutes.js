



// I SENT SUBCAT DELETE ROUTE TO CAT ROUTES MOMENTARILY TO SPOT ROUTING ERRORS, ITS FUNCTIONAL BUT STILL NOT DELETING ANY SUBCAT THAT HAS ATTACHED 
// EXPENSES/TRANSACTIONS WITH IT!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!








const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Subcategory } = require('../../models');


// add new subcategory route
router.post('/add', withAuth, async (req, res) => {
    try{
        const subCatData = Subcategory.create({
            name: req.body.name,
            user_id: req.session.user_id,
            category_id: req.body.catID,
        })
        res.status(200).json(subCatData)
    } catch (err) {
        res.status(400).json(err)
    }
});


// delete subcategory
router.delete('/delete/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Subcategory.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No Subcategory found with this id!' });
      return;
    }

    res.status(200).json(projectData)
  } catch (err) {
    res.status(401).json(err);
  }
});

  

module.exports = router;