import mongoose from 'mongoose';

const uri =
  'mongodb+srv://tutemoreno:Tute$2365@fittooldb.or2an.mongodb.net/fittooldb?retryWrites=true&w=majority';

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('mongoDB is connected'))
  .catch((err) => console.log(err));
