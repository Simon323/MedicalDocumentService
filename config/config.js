var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'medicaldocumentservice'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mongo'
  },

  test: {
    root: rootPath,
    app: {
      name: 'medicaldocumentservice'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/medicaldocumentservice-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'medicaldocumentservice'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/medicaldocumentservice-production'
  }
};

module.exports = config[env];
