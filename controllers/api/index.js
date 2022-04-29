const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const periodRoutes = require('./periodRoutes');
const factRoutes = require('./factRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const submitRoutes = require('./submitRoutes');


router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/period', periodRoutes);
router.use('/fact', factRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/submit', submitRoutes);

module.exports = router;
