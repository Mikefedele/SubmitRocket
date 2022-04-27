const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const periodRoutes = require('./periodRoutes');
const factRoutes = require('./factRoutes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/period', periodRoutes);
router.use('/fact', factRoutes);

module.exports = router;
