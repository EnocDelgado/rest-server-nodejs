const Role = require('../models/role')
const User = require('../models/user')

// Verify if the ROLE is valid
const isValidRole = async(role = "") => {
    const roleExists = await Role.findOne({ role })
    if ( !roleExists ) {
        throw new Error(`Role: ${ role } does not exist in database`)
    }
}

// Verify if the email is valid
const isValidEmail = async( email = "" ) => {
    const emailExists = await User.findOne({ email })
    if ( emailExists ) {
        throw new Error(`Email: ${ email } already exists`)
    }
}

// Verify if the email is valid
const isValidID = async( id ) => {
    const existsID = await User.findById( id )
    if ( !existsID ) {
        throw new Error(`ID: ${ id } does not exist`)
    }
}

module.exports = {
    isValidRole,
    isValidEmail,
    isValidID
}