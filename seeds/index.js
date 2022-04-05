const sequelize = require('../config/connection');
const seedPost = require('./postData');

const seedDb = async () => {
  await sequelize.sync({ force: true });
  await seedPost();

  process.exit(0);
};

seedDb();