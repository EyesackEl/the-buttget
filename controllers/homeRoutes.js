const router = require('express').Router();
const auth = require('../utils/auth');
const { createDeflate } = require('zlib');
const { Category, Transaction, Expense, User, Subcategory, } = require('../models');


// home page to render all of user based budget table, must check if logged in
//! add an auth here
router.get('/',  async (req, res) => {
    try {
      const userData = await User.findByPk(1, {
        //* where: {user_id: req.session.user_id},
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
        logged_in: req.session.logged_in,
      });
    }
    catch (err) {
      res.status(400).json(err);
    };
});

router.get('/add/category', async (req, res) => {
  try {
    res.render('add-category')
  } catch (err) {
    res.status(400).json(err);
  }
    
});

router.get('/subcategory', async (req, res) => {
  try {
    const subCatQuery = req.query.subCategory_id; 

    const subCatData = await Subcategory.findByPk(subCatQuery);

    const expData = await Expense.findAll({
      where: { subcategory_id: subCatQuery},
      include: [
        {
          model: Transaction
        }
      ]
    })

    const subCat = subCatData.get({ plain: true});
    const expenses = expData.map((data) => data.get({ plain:true }));

    console.log(`\n${JSON.stringify(subCat)}\n`)
    console.log(`\n${JSON.stringify(expenses)}\n`)

    res.render('subCategory', {
      subCategory: subCat,
      expenses: expenses
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/add/subcategory', async (req, res) => {
  try {
    const catId = req.query.category_id;

    const catData = await Category.findByPk(catId);

    const cat = catData.get({ plain: true })

    res.render('add-subCat', {
      category: cat
    })
  } catch (err) {
    res.status(400).json(err);
  }
    
});

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



module.exports = router;