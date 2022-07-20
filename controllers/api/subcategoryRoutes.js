const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Subcategory, Expense, Transaction } = require('../../models');


// add new subcategory
router.get('/addSubcategories', (req, res) => {
    res.render('add-subcategories')
  })
  

router.get('/addCategories', (req, res) => {
    res.render('add-category')
  })


// render one subcategory and its info once clicked, per ID in query parameter
router.get('/', async (req, res) => {

  const subcatID = req.query.subCategory_id
  console.log(subcatID)

  const subcatData = await Subcategory.findByPk( subcatID, {
    where: { user_id: 3},
    // include: [
    //   {
    //     model: Expense
    //   }
    // ]
  });

  const expenseData = await Expense.findOne({subcategory_id: subcatID}, {
    // where: { user_id: 3},
    // include: [
    //   {
    //     model: Transaction
    //   }
    // ]
  })

  console.log(expenseData + '3');

  const expenseDataRender = expenseData.get({ plain: true });

  console.log(expenseDataRender + '4');

  subcatDataRender = subcatData.get({ plain: true });

  console.log(subcatDataRender)

  res.render('subCategory', 
  // {
  //   subCategory: subcatDataRender,
  //   expense: expenseDataRender
  // }
  )
});



module.exports = router;