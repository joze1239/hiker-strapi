// const parse = require("pg-connection-string").parse;


module.exports = ({ env }) => {
  console.log("database.js", env('DATABASE_URL', 'missing'));
  return {

  }
  //  return {
  //   connection: {
  //     client: "postgres",
  //     connection: {
  //       host: config.host,
  //       port: config.port,
  //       database: config.database,
  //       user: config.user,
  //       password: config.password,
  //       ssl: false,
  //     },
  //     debug: false,
  //   },
  // }
};
