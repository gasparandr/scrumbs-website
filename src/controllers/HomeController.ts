

import { Router, Request, Response, NextFunction } from "express";



class HomeController {

    router: Router;



    constructor() {
        this.router = Router();
        this.routes();
    }



    public routes() {
        this.router.get( "/", this.home );
    }



    public home(req: Request, res: Response, next: NextFunction) {

        res.render( "home" );

    }

}


export default new HomeController().router;