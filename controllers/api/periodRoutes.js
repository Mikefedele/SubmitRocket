const router = require('express').Router();
const { Period } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const periodData = await Period.findAll({
      where: {
        // user_id: req.session.user_id
      }
    });
    res.status(200).json(periodData);
  } catch (err) {
    res.status(500).json(err.toString());
  }
});


// router.post('/', withAuth, async (req, res) => {
router.post('/', async (req, res) => {
  try {
    const newPeriod = await Period.create({
      ...req.body,
    //   user_id: req.session.user_id,
    });

    res.status(200).json(newPeriod);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.put('/:id', withAuth, async (req, res) => {
router.put('/:id', async (req, res) => {
  try {
    const periodData = await Period.update(req.body, {
    where: {
      id: req.params.id,
    }
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

// router.delete('/:id', withAuth, async (req, res) => {
  router.delete('/:id', async (req, res) => {
    try {
      const periodData = await Period.destroy({
        where: {
          id: req.params.id,
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

module.exports = router;
