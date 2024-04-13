// This imports the models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// This model uses the belongsTo() method to indicate that each product belongs to only one category.
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});


// This model uses the hasMany() method to indicate that a category can have multiple products.
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// This creates a new table called product_tag that has a product_id and tag_id column based on the Product
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// This creates a new table called product_tag that has a product_id and tag_id column based on the Tag
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
});

// This exports the models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
