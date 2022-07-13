const router = require('express').Router();

router.get('/', async (req, res) => {
    // home page to render all of user based budget table
    res.render('homepage');
})


// If the user is already logged in, redirect the request to home
router.get('/login', (req, res) => {

    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

module.exports = router;