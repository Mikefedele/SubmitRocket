const router = require('express').Router();
const { User, Fact, Product, Period } = require('../models');
//TODO comment out withAuth til ready
// const withAuth = require('../utils/auth'); 


router.get('/dashboard', async (req, res) => {
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
          model: User,
          as: 'user',

        },
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

    const facts = factData.map((fact) => fact.get({ plain: true }));
console.log(facts);
    // Pass serialized data and session flag into template
    res.render('dashboard', { 
      facts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err.toString());
  }
});
