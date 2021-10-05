import sequelize from '../sequelize';
export { default as User } from './User';

(async () => await sequelize.sync({ force: true, alter: true }))();
