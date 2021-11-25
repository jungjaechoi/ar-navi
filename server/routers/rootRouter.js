import express from "express";
import {home, down, summary, manual, getLogin, postLogin, easyLogin, board, getWrite, 
    postWrite, getLoadboards, postLoadboards,getContents,postContents, verifyToken,
    loadcomments, getFix,postFix, deletecomment, deleteboard,loadpagination,getJoin, postJoin,
    loadmine,onlyminepagination
} from "../controllers/usercontroller.js";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/index.html", home);
rootRouter.get("/down.html", down);
rootRouter.get("/summary.html", summary);
rootRouter.get("/manual.html", manual);
rootRouter.route("/login.html").get(getLogin).post(postLogin);
rootRouter.post("/easylogin",easyLogin);
rootRouter.route("/join.html").get(getJoin).post(postJoin);
rootRouter.get("/board.html", board);
rootRouter.route("/write.html").get(getWrite).post(postWrite);
rootRouter.route("/loadboards").get(getLoadboards).post(postLoadboards);
rootRouter.route("/contents.html").get(getContents).post(postContents);
rootRouter.post("/loadcomments",loadcomments);
rootRouter.route("/fix.html").get(getFix).post(postFix);
rootRouter.post("/deletecomment", deletecomment);
rootRouter.post("/deleteboard",deleteboard);
rootRouter.get("/loadpagination",loadpagination);
rootRouter.post("/verifyToken", verifyToken);
rootRouter.post("/loadmine",loadmine);
rootRouter.post("/onlyminepagination", onlyminepagination)

export default rootRouter;   