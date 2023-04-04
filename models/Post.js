const { Sequelize, Model, DataTypes } = require('sequelize');      // Import Sequelize 
const sequelize = require('../config/conection');                  // Import database connection

class Post extends Model {}

Post.init(                                                          // Post model
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize                                                       // Sequelize instance
  }
);

module.exports = Post;