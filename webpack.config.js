const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.js'
  },
  target: 'node',
  externals: {
    'sqlite3': 'commonjs sqlite3',
    'mariasql': 'mariasql',
    'mssql': 'mssql',
    'mysql': 'mysql',
    'oracle': 'oracle',
    'strong-oracle': 'strong-oracle',
    'oracledb': 'oracledb',
    'pg': 'pg',
    'pg-query-stream': 'pg-query-stream'
  },
  mode: 'development'
};