const { response } = require('express')

const getUser =  ( req, res = response ) => {
    
    const { q, name = "no name", api_key = "no api key", page = 1, limit } = req.query

    res.json({
        msg: "get API - Controller"
    })
}

const putUser =  ( req, res = response ) => {

    const id = req.params

    res.json({
        msg: "put API - Controller",
        id
    })
}


const postUser =  ( req, res = response ) => {

    // This is to read the body of the request
    const body = req.body

    res.json({
        msg: "post API - Controller",
        body
    })
}

const deleteUser =  ( req, res = response ) => {
    res.json({
        msg: "delete API - Controller"
    })
}

const patch =( req, res = response ) => {
    res.json({
        msg: "patch API - Controller"
    })
}

module.exports = { 
    getUser,
    postUser,
    putUser,
    deleteUser,
    patch
}