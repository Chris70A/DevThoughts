const { Sequelize, Model, DataTypes } = require('sequelize');           // Import Sequelize
const sequelize = require('../config/conection');                       // Import database connection

class Comment extends Model {}                                          // Comment class

Comment.init(                                                           // Comment model
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

module.exports = Comment;
