'use strict';

const mongoose = require('mongoose'),
    encryptor = require('../../utils/encryptor'),
    Schema = mongoose.Schema;

let userSchema = new Schema({
    username: {
        type: String,
        minlength: 6,
        maxlength: 15,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    lastName: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 6,
        max: 100
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'unspecified']
    },
    passHash: String,
    salt: String,
    email: String,
    profilePicture: {
        type: String,
        default: 'https://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png'
    },
    admin: Boolean,
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