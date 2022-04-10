const Post = require('./Post');
const User = require('./User');

// Associations

// TODO: A user can have many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
})

// TODO: A post has a user
Post.belongsTo(User, {
  foreignKey: 'user_id',
})

// TODO: A post can have many comments

// TODO: A comment belongs to a post

// TODO: A user can have many comments

// TODO: A comment belongs to a user

module.exports = { Post, User };