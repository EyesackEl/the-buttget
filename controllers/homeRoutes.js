const router = require('express').Router();
const exp = require('constants');
const { createDeflate } = require('zlib');
const { Category, Transaction, Expense, User, Subcategory } = require('../models');


// home page to render all of user based budget table, must check if logged in
router.get('/', async (req, res) => {
    try {

      const budgetData = await Category.findAll();
      const budgetDataRender = budgetData.map( (data) => data.get({ plain:true }) );

      // const subcategories = await Subcategory.findAll();
      // const subCategoriesRender = subcategories.map( (data) => data.get( { plain: true } ) );

      // const expenses = await Expense.findAll();
      // const expensesRender = expenses.map( (data) => data.get( { plain: true } ) )
      
      // const transactions = await Transaction.findAll();
      // const transactionsRender = transactions.map( (data) => data.get( { plain: true} ) );

      // const users = await User.findAll({
      //   attributes: { exclude: ['password']},
      // });
      // const usersRender = users.map( (data) => data.get( { plain: true} ) );

      res.render('homepage', { budgetDataRender } );

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

router.get('/subcategories', (req, res) => {
  res.render('subcategories')
});

router.get('/addSubcategories', (req, res) => {
  res.render('add-subcategories')
})

router.get('/categories', (req, res) => {
  res.render('categories')
})

module.exports = router;