
import HomeController from "./controllers/HomeController";

require( "dotenv" ).config();

import * as compression from "compression";
import * as bodyParser from "body-parser";
import * as express from "express";
import * as cors from "cors";
import * as ejs from "ejs";


const publicPath = __dirname.substr( 0, __dirname.indexOf( "build" ) ) + "public";


class Server {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.errors();
    }



    public config() {

        this.app.set( "view engine", "ejs" );

        this.app.use( "*/public", express.static( publicPath ) );


        this.app.use( bodyParser.urlencoded( { extended: true } ) );
        this.app.use( bodyParser.json() );
        this.app.use( compression() );
        this.app.use( cors() );


    }



    public routes() {

        this.app.use( '/', HomeController );
    }



    public errors() {
        this.app.use( (err, req, res, next) => {
            res.status( 422 ).json( { success: false, message: err.message } );
        });
    }

}



export default new Server().app;