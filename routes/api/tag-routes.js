const router = require('express').Router();
// This imports the Tag, Product, and ProductTag models to use its database functions.
const { Tag, Product,ProductTag} = require('../../models');


// This route is used to find all tags and include its associated Product data
router.get('/', (req, res) => {
    Tag.findAll({
    include: [
      {
        model:Product,
        attributes: ['product_name']
      },
    ],
  })
    .then((tags) => res.json(tags))
    .catch((err) => res.status(500).json(err));
});

// This route is used to find one tag by its `id` value and include its associated Product data
router.get('/:id', (req, res) => {
    Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model:Product,
        attributes: ['product_name']
      },
    ],
  })
    .then((tag) => {
      if (!tag) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(tag);
    })
    .catch((err) => res.status(500).json(err));
});

// This route is used to create a new tag
router.post('/', (req, res) => {
   Tag.create(req.body)
    .then((tag) => res.json(tag))
    .catch((err) => res.status(500).json(err));
});

// This route is used to update a tag's name by its `id` value
router.put('/:id', (req, res) => {
    Tag.update(req.body, {
    where: {
      id: req.params.id
    },
  })
    .then((result) => {
      if (result[0] === 0) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json({ message: 'Tag updated successfully'});
    })
    .catch((err) => res.status(500).json(err));
});

// This route is used to delete a tag by its `id` value
router.delete('/:id', (req, res) => {
    Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((result) => {
      if (result === 0) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json({message: 'Tag deleted successfully'});
    })
    .catch((err) => res.status(500).json(err));
});

// This exports the router
module.exports = router;
