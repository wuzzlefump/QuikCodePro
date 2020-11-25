const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const usersSchema = new Schema({
  firstname: {
    type: String,
    unique: false,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    unique: false,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    unique: false,
    required: true,
    trim: true,
  },
  avatar: { 
    type: String, 
    required: false
  },
  bio: { 
    type: String,
    required: false
  },
  admin: {
    type: Boolean,
    unique: false,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

usersSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

usersSchema.methods.validPassword = (password, encrypted) => {
  return bcrypt.compareSync(password, encrypted);
};

const User = mongoose.model('User', usersSchema);

module.exports = User;
