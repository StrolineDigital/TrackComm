const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
// This initializes the Tag model (table) by extending off Sequelize's Model class.
class Tag extends Model {}

Tag.init(
  {
    //This defines the columns in the Tag table, and the second object configures certain options for the table.
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);
// This exports the Tag model for use in other files.
module.exports = Tag;
