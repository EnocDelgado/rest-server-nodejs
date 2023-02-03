const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const { dbConnnection } = require('../database/config')

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.paths = { 
            auth: '/api/auth',
            categories: '/api/categories',
            products: '/api/products',
            search: '/api/search',
            users: '/api/users',
            uploads: '/api/uploads'
        }

        // Database connection
        this.connectingDB()

        // Middleware
        this.middlewares()

        // Route middleware
        this.routes()

    }

    async connectingDB() {
        await dbConnnection()
    }

    middlewares() {

        // CORS
        this.app.use( cors() )

        // Reading and parsing from the body
        this.app.use( express.json() )

        // Public directory
        this.app.use( express.static('public') )

        // Flieupload 
        this.app.use( fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
    }

    routes() {
        this.app.use( this.paths.auth, require('../routes/auth') )
        this.app.use( this.paths.categories, require('../routes/categories') )
        this.app.use( this.paths.products, require('../routes/products') )
        this.app.use( this.paths.search, require('../routes/search') )
        this.app.use( this.paths.users, require('../routes/users') )
        this.app.use( this.paths.uploads, require('../routes/uploads') )
    };

    listen(){
        this.app.listen( this.port, () => {
            console.log( `Listening on port ${ this.port }` );
        })
    };

}

module.exports = Server;