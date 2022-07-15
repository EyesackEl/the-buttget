const router = require('express').Router();
const { createDeflate } = require('zlib');
const { Category, Transaction, Expense, User, } = require('../models');


// home page to render all of user based budget table, must check if logged in
router.get('/', async (req, res) => {
    try {
      console.log(1)
      const budgetData = await Category.findAll({
        include: [
          // including user name to display just for clarity sake
          {
            model: User,
            attributes: ['name'],
          }
        ],
      });

      console.log(budgetData)

      const budgetTables = budgetData.map( (data) => data.get({ plain:true }) );
      
      console.log(budgetTables)

      res.render('homepage', budgetTables);

      console.log(4)
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

module.exports = router;