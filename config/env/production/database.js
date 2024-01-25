const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {
  const databaseUrl = env('DATABASE_URL', '');
console.log('databaseUrl', {databaseUrl})
  const config = parse(databaseUrl);
  console.log('config', {config})

  return {
    connection: {
      client: 'postgres',
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
  };
};
