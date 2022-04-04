const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/nkh_node_dev');
    console.log('connect success!');
  } catch (error) {
    console.log('fails: ', error);
  }
}

module.exports = {
  connect,
};
