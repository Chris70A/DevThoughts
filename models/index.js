const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {                                // POST  belongs to Users
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {                              // Posts has many Comments
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {                            // Comment belongs to Users
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});




module.exports = {
  User,
  Comment,
  Post
};