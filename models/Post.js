const { Model, DataTypes } = require('sequelize');                
const sequelize = require('../config/conection');                  // Import database connection

class Post extends Model {}

Post.init(                                                          // Post model
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = Post;