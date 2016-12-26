'use strict';

const mongoose = require('mongoose'),
    encryptor = require('../../utils/encryptor'),
    Schema = mongoose.Schema;

let userSchema = new Schema({
    username: {
        type: String, unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: Number,
    gender: {
        type: String,
        enum: ['male', 'female', 'unspecified']
    },
    passHash: String,
    salt: String,
    email: String,
    profilePicture: {
        type: String,
        default: 'https://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png'
    },
    role: {
        type: String,
        default: 'user'
    },
    facebookId: String,
    facebookToken: String
});

userSchema.method({
    authenticate(password) {
        if (encryptor.generateHashedPassword(this.salt, password) === this.passHash) {
            return true;
        }
        else {
            return false;
        }
    }
});

mongoose.model('user', userSchema);
let User = mongoose.model('user');

module.exports.User = User;