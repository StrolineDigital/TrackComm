//This file is used to collect the packaged group of API endpoints and prefix them with the path /api. 
//The router will direct any requests that start with /api to the appropriate file.
const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
