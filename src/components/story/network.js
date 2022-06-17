import { Router } from "express";
import * as Controller from "./controller";


const stroyRouter = Router();

stroyRouter.route("/").get(Controller.list);
stroyRouter.route("/").post(Controller.store);

export default stroyRouter;