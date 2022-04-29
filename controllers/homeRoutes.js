const router = require('express').Router();
const { Fact, Product, Period } = require('../models');
//TODO comment out withAuth til ready
// const withAuth = require('../utils/auth');



// router.get('/dashboard', withAuth, async (req, res) => {
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const factData = await Fact.findAll({
      where: {
        // user_id: req.session.user_id
      //*HARDCODED FOR NOW, WHEN READY TO DEPLOY UNCOMMENT ABOVE & DELETE BELOW
        user_id: 1
      },
      include: [
        {
          model: Product,
          as: 'product',

        },
        {
          model: Period,
          as: 'period',

        },
      ],
    });

//     const facts = factData.map((fact) => fact.get({ plain: true }));
// console.log(facts);
    // Pass serialized data and session flag into template
    // res.render('homepage', {
    //   facts,
    //   logged_in: req.session.logged_in
    // });
    res.render('homepage')
    // res.status(200).json(factData);
  } catch (err) {
    res.status(500).json(err.toString());
  }
});


//* ADDED login to homeRoutes
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/api/submit');
    return;
  }

  res.render('login');
});


router.get('/api/dashboard', (req, res) =>{

}
)


module.exports = router;
