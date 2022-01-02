import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please enter name'],
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Please enter email'],
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'Please enter password'],
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
