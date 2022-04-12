const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// Associations

// TODO: A user can have many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
})

// TODO: A post has a user
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
})

// TODO: A user can have many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
})

// TODO: A comment belongs to a user
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
})

// TODO: A post can have many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'cascade',
})

// TODO: A comment belongs to a post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'cascade',
})



module.exports = { Post, User, Comment };