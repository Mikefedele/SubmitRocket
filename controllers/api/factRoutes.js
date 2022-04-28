const router = require('express').Router();
const { Fact, Product, Period, User } = require('../../models');

// const withAuth = require('../../utils/auth');

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

    res.status(200).json(factData);
  } catch (err) {
    res.status(500).json(err.toString());
  }
});


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

module.exports = router;
