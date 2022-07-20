const router = require('express').Router();
const auth = require('../utils/auth');
const { createDeflate } = require('zlib');
const { Category, Transaction, Expense, User, Subcategory, } = require('../models');


// home page to render all of user based budget table, must check if logged in
//! add an auth here
router.get('/',  auth, async (req, res) => {
    try {
      const userID = req.session.user_id
      const userData = await User.findByPk(userID, {
        //* where: {user_id: req.session.user_id},
        attributes: {exclude: ['password']}
      });

      const catData = await Category.findAll({
        where: { user_id: userID},
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

    catID = req.query.category_id;

    const subCatData = await Subcategory.findByPk(subCatQuery);

    const expData = await Expense.findAll({
      where: { subcategory_id: subCatQuery},
      include: [
        {
          model: Transaction
        }
      ]
    })



    const catData = await Category.findByPk(catID);

    const cat = catData.get( { plain: true } );  
    const subCat = subCatData.get({ plain: true});
    const expenses = expData.map((data) => data.get({ plain:true }));

    console.log(`\n${JSON.stringify(subCat)}\n`)
    console.log(`\n${JSON.stringify(expenses)}\n`)

    res.render('subCategory', {
      subCategory: subCat,
      expenses: expenses,
      category: cat
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

router.get('/add/expense', async (req, res) => {
  try {
    const subCatId = req.query.subcategory_id;

    const subCatData = await Subcategory.findByPk(subCatId);

    const subCat = subCatData.get({ plain: true })

    res.render('add-expense', {
      subcategory: subCat
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/add/transaction', async (req, res) => {
  try {
    const expId = req.query.expense_id;

    const expData = await Expense.findByPk(expId);

    const exp = expData.get({ plain: true })

    res.render('add-transaction', {
      expense: exp
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