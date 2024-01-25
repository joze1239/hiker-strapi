const parse = require('pg-connection-string').parse;

console.log('DATABASE_URL', process.env )
const config = parse(process.env.DATABASE_URL);

module.exports = ({env}) => {
  console.log('database.js', env)
 return {
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: false,
    },
    debug: false,
  },
}
};