import { model, Schema } from 'mongoose';

// import bcrypt from 'bcrypt';

export default model(
  'User',
  new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    { timestamps: true },
  ),
);
