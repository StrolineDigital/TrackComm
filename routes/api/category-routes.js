const router = require('express').Router();
// This imports the Category and Product models to use its database functions.
const { Category, Product } = require('../../models');


//This route is used to find all categories and include its associated Products
router.get('/', (res) => {
   Category.findAll({
    include: [Product]
  })
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
    });

    //This route is used to find one category by its `id` value and include its associated Products
router.get('/:id', (req, res) => {
    Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  })
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
    });

    //This route is used to create a new category
router.post('/', (req, res) => {
    Category.create(req.body)
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//This route is used to update a category by its `id` value
router.put('/:id', (req, res) => {
    Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//This route is used to delete a category by its `id` value
router.delete('/:id', (req, res) => {
    Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//This exports the router

module.exports = router;
