import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter.js";
import { createRequire } from "module";
import path from 'path';



const require = createRequire(import.meta.url);


const app = express();
const logger = morgan("dev"); //morgan에서 dev툴 사용, middleware 모듈

app.use("/assets", express.static("assets"));
app.use(express.urlencoded({extended:true}));
app.set("views", process.cwd() + "/server/views");
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use("/", rootRouter);

export default app;