import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dialect: 'mysql',
  database: process.env.DATABASE_NAME,
  logging: false,
  // logging: console.log,
});

// await db.sync({ force: true });
// const db = new Sequelize({
//   username: 'sa',
//   password: 'sql',
//   host: 'localhost',
//   port: 1433,
//   dialect: 'mssql',
//   database: 'master',
//   logging: console.log,
// });

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

export default sequelize;
