const express = require('express')
const cors = require('cors')

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.userPath = '/api/users'

        // Middleware
        this.middlewares()

        // Reading and parsing from the body
        this.app.use( express.json() )

        // Route middleware
        this.routes()
    }

    middlewares() {

        // CORS
        this.app.use( cors() )

        // Public directory
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.use( this.userPath, require('../routes/users') )
    };

    listen(){
        this.app.listen( this.port, () => {
            console.log( `Listening on port ${ this.port }` );
        })
    };

}

module.exports = Server;