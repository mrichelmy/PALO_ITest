const mysql = require('mysql/');
const util = require('util');
const config = require('../config');

const connection = mysql.createConnection(config.db);
const query = util.promisify(connection.query).bind(connection);


module.exports = {
  query
}