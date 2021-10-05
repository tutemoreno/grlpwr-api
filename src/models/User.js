import sequelize from '../sequelize';
import { DataTypes, Model } from 'Sequelize';

const { STRING, INTEGER } = DataTypes;

export default class User extends Model {}
User.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
      unique: true,
    },
    email: {
      allowNull: false,
      type: STRING,
      unique: true,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    firstName: {
      allowNull: false,
      type: STRING,
    },
    lastName: {
      allowNull: false,
      type: STRING,
    },
  },
  { sequelize },
);
