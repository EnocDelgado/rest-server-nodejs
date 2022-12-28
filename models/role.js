const { Schema, model } = require('mongoose')

const Role = Schema({
    
    role: {
        type: String,
        required: [true, "Role is required"],
    }
    
})

module.exports = model( "Role", Role )