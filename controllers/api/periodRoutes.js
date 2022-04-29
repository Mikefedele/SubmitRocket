const router = require('express').Router();
const { Period } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPeriod = await Period.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPeriod);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const periodData = await Period.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!periodData) {
      res.status(404).json({ message: 'No period found with this id!' });
      return;
    }

    res.status(200).json(periodData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const periodData = await Period.findAll({
      // where: {
      //   // user_id: req.session.user_id
      // //*HARDCODED FOR NOW, WHEN READY TO DEPLOY UNCOMMENT ABOVE & DELETE BELOW
      //   user_id: 1
      // },
      // include: [
      //   {
      //     model: Product,
      //     as: 'product',

      //   },
      //   {
      //     model: Period,
      //     as: 'period',

      //   },
      // ],
    });

    // const periodData = await Period.findAll();      
    const periods = periodData.map((period)=>period.get({plain: true}))
    // const productData = await Product.findAll()
    // const products = productData.map((product)=>product.get({plain: true}))
    // const facts = factData.map((fact) => fact.get({ plain: true }));
console.log(periods);
    
    res.status(200).json(periods);
  } catch (err) {
    res.status(500).json(err.toString());
  }
});
module.exports = router;
