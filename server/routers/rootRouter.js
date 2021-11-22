import express from "express";
import {home, down, summary, manual, getLogin, postLogin, board, getWrite, postWrite, loadboards,getContents,postContents, loadcomments} from "../controllers/usercontroller.js";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/index.html", home);
rootRouter.get("/down.html", down);
rootRouter.get("/summary.html", summary);
rootRouter.get("/manual.html", manual);
rootRouter.route("/login.html").get(getLogin).post(postLogin);
rootRouter.get("/board.html", board);
rootRouter.route("/write.html").get(getWrite).post(postWrite);
rootRouter.get("/loadboards",loadboards);
rootRouter.route("/contents.html").get(getContents).post(postContents);
rootRouter.post("/loadcomments",loadcomments);

export default rootRouter;   