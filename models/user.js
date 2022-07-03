import schemaModel from 'mongoose';
const { Schema, model } = schemaModel;

const authSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    required: 'Email is mandatory',
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    default: '',
  },
});

const usersDetails = model('users', authSchema);

export default usersDetails;
