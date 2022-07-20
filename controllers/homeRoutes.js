const router = require('express').Router();
const auth = require('../utils/auth');
const { createDeflate } = require('zlib');
const { Category, Transaction, Expense, User, Subcategory, } = require('../models');


// home page to render all of user based budget table, must check if logged in
//TODO::  add an auth here
router.get('/',  async (req, res) => {
    try {
      const userData = await User.findByPk(3, {
        //* where: {user_id: req.session.user_id}, ^^^^
        attributes: {exclude: ['password']}
      });

      
      const catData = await Category.findAll({
        where: { user_id: 3},
        include: [
          {
            model: Subcategory
          }
        ]
      });

      const user = userData.get({ plain: true});

      const cats = catData.map((data) => data.get({ plain:true }));

      console.log(`\n\t${JSON.stringify(cats)}\n`);

      res.render('homepage', {
        user: user,
        categories: cats,
      });
    }
    catch (err) {
      res.status(400).json(err);
    };

})


// If the user is already logged in, redirect the request to home
router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// render signup page
router.get('/signup', (req, res) => {
  res.render('sign-up');
})

router.get('/subcategory', async (req, res) => {

  const catID = req.query.subCategory_id
  console.log(catID)

  const catData = await Subcategory.findByPk( catID, {
    where: { user_id: 3},
  });

  console.log(catData)

  subCategories = catData.get({ plain:true });
  console.log(subCategories)

  // // render all subcategories
  res.render('subCategory', subCategories)
});

router.get('/addSubcategories', (req, res) => {
  res.render('add-subcategories')
})

router.get('/addCategories', (req, res) => {
  res.render('add-category')
})

module.exports = router;