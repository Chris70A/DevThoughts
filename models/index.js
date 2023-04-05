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

User.hasMany(Post, {                                 // Users has many Posts
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {                            // Comments belong to Posts
  foreignKey: 'post_id',
 onDelete: 'CASCADE'
});

User.hasMany(Comment, {                              // User has many Comments
  foreignKey: 'user_id',
  onDelete:  'CASCADE'
});


module.exports = {
  User,
  Comment,
  Post
};