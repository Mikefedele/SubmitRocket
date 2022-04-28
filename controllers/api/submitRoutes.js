// Initialize Express.js router object
const router = require('express').Router();

// Import references to the route models
const { Fact, Product, Period } = require('../../models');

// Import authentication middleware to secure the page.
// TODO - Commenting until required and/or wired up
// const withAuth = require('../utils/auth');

// GET all products & periods for the logged in user
router.get('/', async (req, res) => {
    try {
        // Get period data from storage
        const periodData = await Period.findAll();

        // Map over the array of sequelize objects with serialized data for clean workable records
        const periods = periodData.map((period) => period.get({ plain: true }));
        console.log(periods);

        // Get period data from storage
        const productData = await Product.findAll();

        // Map over the array of sequelize objects with serialized data for clean workable records
        const products = productData.map((product) =>
            product.get({ plain: true })
        );
        console.log(products);

        // Get all projects and JOIN with user data
        const factData = await Fact.findAll({
            where: {
                // user_id: req.session.user_id
                // TODO - HARDCODED FOR NOW, WHEN READY TO DEPLOY UNCOMMENT ABOVE & DELETE BELOW
                user_id: 1
            },
            include: [
                {
                    model: Product,
                    as: 'product'
                },
                {
                    model: Period,
                    as: 'period'
                }
            ]
        });

        const facts = factData.map((fact) => fact.get({ plain: true }));
        console.log(facts);

        //Pass serialized data (periods, products, and fact) and session flag into template
        res.render('submit', {
            ...periods,
            ...products,
            ...facts,
            logged_in: req.session.logged_in
        });

        // res.status(200).json(factData);
    } catch (err) {
        res.status(500).json(err.toString());
    }
});

// POST to send input data
router.post('/', async (req, res) => {
    try {
        const newFact = await Fact.create({
            ...req.body
            //   user_id: req.session.user_id,
        });

        // res.status(200).json(newFact);
        res.render('submit', {
            // facts,
            // periods,
            // products,
            // logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
