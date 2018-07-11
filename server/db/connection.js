const knex = require('knex') // require knex
const config = require('../../knexfile').development //grab sqlite3 from knexfile and in a development environment
const connection = knex(config) // call knexx that has knexfile which grabs sqlite3 data

module.exports = connection // exports connection so I can import it on a db file