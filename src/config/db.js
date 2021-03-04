const { Pool } = require('pg')

module.exports = new Pool({
  user: 'gustavosantos',
  password: '458713',
  host: 'localhost',
  port: 5432,
  database: 'launchstore'
})
