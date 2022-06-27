const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      references: {
        model: "product",
        key: "id",
      },
      type: DataTypes.INTEGER,
      },
      tag_id: {
        references: {
          model: "tag",
          key: "id",
        },
        type: DataTypes.INTEGER,
        },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
