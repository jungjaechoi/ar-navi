import express from "express";
import {home, down, summary, manual, getLogin, postLogin, board, getWrite, 
    postWrite, getLoadboards, postLoadboards,getContents,postContents, 
    loadcomments, getFix,postFix, deletecomment, deleteboard} from "../controllers/usercontroller.js";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/index.html", home);
rootRouter.get("/down.html", down);
rootRouter.get("/summary.html", summary);
rootRouter.get("/manual.html", manual);
rootRouter.route("/login.html").get(getLogin).post(postLogin);
rootRouter.get("/board.html", board);
rootRouter.route("/write.html").get(getWrite).post(postWrite);
rootRouter.route("/loadboards").get(getLoadboards).post(postLoadboards);
rootRouter.route("/contents.html").get(getContents).post(postContents);
rootRouter.post("/loadcomments",loadcomments);
rootRouter.route("/fix.html").get(getFix).post(postFix);
rootRouter.post("/deletecomment", deletecomment);
rootRouter.post("/deleteboard",deleteboard);

export default rootRouter;   