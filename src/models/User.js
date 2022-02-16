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
    username: {
      allowNull: false,
      type: STRING,
      unique: true,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
  },
  { sequelize },
);
