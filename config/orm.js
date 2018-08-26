const connection = require('./connection.js');

const orm = {
  selectAll: function(tableName, callback) {
    let queryString = 'SELECT * FROM ' + tableName;

    connection.query(queryString, function(err, data) {
      if (err) throw err;
      callback(data);
    });
  },

  insertOne: function(tableName, column, burgerInput, callback) {
    let queryString = 'INSERT INTO ' + tableName + '(' + column + ') VALUES (?)';

    connection.query (queryString, [burgerInput], function(err, data) {
      if(err) throw err;
      callback(data);
    });
  },

  updateOne: function(tableName, col, colVal, condition, conditionVal, callback) {
    let queryString = 'UPDATE ' + tableName + ' SET ' + col + '=?' + 'WHERE ' + condition + '=?';

    connection.query(queryString, [colVal, conditionVal], function(err, data) {
      if(err) throw err;
      callback(data);
    });
  },

  deleteOne: function(tableName, condition, conditionVal, callback) {
    let queryString = 'DELETE FROM ' + tableName + ' WHERE ' + condition + '=?';

    connection.query(queryString, [conditionVal], function(err, data) {
      if(err) throw err;
      callback(data);
    });
  }
};

module.exports = orm;
