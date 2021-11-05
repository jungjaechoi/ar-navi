import express from "express";
import {home} from "../controllers/usercontroller.js";

const rootRouter = express.Router();

rootRouter.get("/", home);

export default rootRouter;   