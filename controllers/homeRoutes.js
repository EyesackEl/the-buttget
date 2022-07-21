const router = require('express').Router();
const auth = require('../utils/auth');
const sequelize = require('../config/connection')
const { createDeflate } = require('zlib');
const { Category, Transaction, Expense, User, Subcategory, } = require('../models');


// home page to render all of user based budget table, must check if logged in
//! add an auth here
router.get('/',  auth, async (req, res) => {
    try {
      const userID = req.session.user_id
      const userData = await User.findByPk(userID, {
        //* where: {user_id: req.session.user_id},
        attributes: [
          'category_id',
          [sequelize.fn('sum', sequelize.col('value')),'sum'],
        ],
        group: ['category_id'],
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

      const catSumsData = await Transaction.findAll({   //Added to get sums
        where: { user_id: userID},
        attributes: [
          'category_id',
          [sequelize.fn('sum', sequelize.col('value')),'sum'],
        ],
        group: ['category_id'],
      });

      const user = userData.get({ plain: true});

      const cats = catData.map((data) => data.get({ plain:true }));

      console.log(`\n\t${JSON.stringify(cats)}\n`);

      const catSums = catSumsData.map((data) => data.get({ plain: true}));  //Added to get sums

      console.log(`\n\t${JSON.stringify(catSums)}\n`);    //Added to get sums

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
    res.render('add-category', {
      logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/subcategory', async (req, res) => {
  try {
    const subCatQuery = req.query.subCategory_id; 

    catID = req.query.category_id;

    const subCatData = await Subcategory.findByPk(subCatQuery);

    const subcatSumsData = await Transaction.findAll({    //Added to get sums
      where: { user_id: userID},
      attributes: [
        'subcategory_id',
        [sequelize.fn('sum', sequelize.col('value')),'sum'],
      ],
      group: ['subcategory_id'],
    });

    const expData = await Expense.findAll({
      where: { subcategory_id: subCatQuery},
      include: [
        {
          model: Transaction
        }
      ]
    })

    const expSumsData = await Transaction.findAll({         //Added to get sums
      where: { user_id: userID},
      attributes: [
        'expense_id',
        [sequelize.fn('sum', sequelize.col('value')),'sum'],
      ],
      group: ['expense_id'],
    });

    const catData = await Category.findByPk(catID);

    const cat = catData.get( { plain: true } );  
    const subCat = subCatData.get({ plain: true});
    const expenses = expData.map((data) => data.get({ plain:true }));
    const subcatSums = subcatSumsData.map((data) => data.get({ plain:true }));    //Added to get sums
    const expSums = expSumsData.map((data) => data.get({ plain:true }));          //Added to get sums

    console.log(`\n${JSON.stringify(subCat)}\n`)
    console.log(`\n${JSON.stringify(expenses)}\n`)
    console.log(`\n${JSON.stringify(subcatSums)}\n`)        //Added to get sums
    console.log(`\n${JSON.stringify(expSums)}\n`)           //Added to get sums

    res.render('subCategory', {
      logged_in: req.session.logged_in,
      subCategory: subCat,
      expenses: expenses,
      category: cat,
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
      logged_in: req.session.logged_in,
      category: cat,
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
      logged_in: req.session.logged_in,
      subcategory: subCat,
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
      logged_in: req.session.logged_in,
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