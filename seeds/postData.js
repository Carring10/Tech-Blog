const { Post } = require('../models');

const postdata = [
  {
    title: 'Why did the chicken cross the road?',
    description: 'To get to the other side.'
  },
  {
    title: 'What did the fish say when he swam into a wall?',
    description: 'dam.'
  }
];
console.log("here", Post);
const seedPost = () => Post.bulkCreate(postdata).then(() => console.log("Posts seeded!"));

module.exports = seedPost;