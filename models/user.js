const { Schema, model } = require('mongoose')

const User = Schema({
    
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    img: {
        type: String,   
    },
    role: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state: {
        type: Boolean,  
        default: true 
    },
    google: {
        type: Boolean,  
        default: false 
    },
})

User.methods.toJSON = function() {

    const { __v, password, _id, ...user } = this.toObject()
    user.uid = _id

    return user
}

module.exports = model( "Users", User )