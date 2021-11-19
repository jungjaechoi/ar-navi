import express from "express";
import {home, down, summary, manual, login, board, getWrite, postWrite, loadboards} from "../controllers/usercontroller.js";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/index.html", home);
rootRouter.get("/down.html", down);
rootRouter.get("/summary.html", summary);
rootRouter.get("/manual.html", manual);
rootRouter.get("/login.html", login);
rootRouter.get("/board.html", board);
rootRouter.route("/write.html").get(getWrite).post(postWrite);
rootRouter.get("/loadboards",loadboards);

export default rootRouter;   