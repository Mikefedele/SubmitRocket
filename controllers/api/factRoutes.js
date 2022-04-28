const router = require('express').Router();
const { Fact, Product, Period, User } = require('../../models');

// const withAuth = require('../../utils/auth');



// router.post('/', withAuth, async (req, res) => {
router.post('/', async (req, res) => {
  try {
    const newFact = await Fact.create({
      ...req.body,
    //   user_id: req.session.user_id,
    });



    res.status(200).json(newFact);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.put('/:id', withAuth, async (req, res) => {
router.put('/:id', async (req, res) => {
  try {
    const factData = await Fact.update(req.body, {
    where: {
      id: req.params.id,
    }
    });

    if (!factData) {
      res.status(404).json({ message: 'No fact found with this id!' });
      return;
    }

    res.status(200).json(factData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.delete('/:id', withAuth, async (req, res) => {
  router.delete('/:id', async (req, res) => {
    try {
      const factData = await Fact.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!factData) {
        res.status(404).json({ message: 'No fact found with this id!' });
        return;
      }
  
      res.status(200).json(factData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

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

      // const periodData = await Period.findAll();      
      // const periods = periodData.map((period)=>period.get({plain: true}))
      // const productData = await Product.findAll()
      // const products = productData.map((product)=>product.get({plain: true}))
      const facts = factData.map((fact) => fact.get({ plain: true }));
  console.log(facts);
      // Pass serialized data and session flag into template
      res.render('homepage', {
        facts,
        // periods, 
        // products,
        logged_in: req.session.logged_in
      });
      // res.render('dashboard')
      // res.status(200).json(periods);
    } catch (err) {
      res.status(500).json(err.toString());
    }
  });

module.exports = router;
