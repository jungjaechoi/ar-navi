import User from "../models/User.js";
import Board from "../models/Board.js";
import Comment from "../models/User.js";

export const home = async (req, res) => {
    return res.render("index.html");
}; 
 
export const down = async(req,res) => {
    return res.render("down.html");
};

export const summary = async(req,res) => {
    return res.render("summary.html");
};

export const manual = async(req,res) => {
    return res.render("manual.html");
};

export const getLogin = async(req,res) => {
    return res.render("login.html");
}

export const postLogin = async(req,res) => {
    const {name, email} = req.body;
    const useremailExists = await User.exists({email});
    if(useremailExists){
        console.log("이미 가입된 회원입니다.");
    }
    else{
        try{
            console.log('db에 회원정보가 저장되었습니다');
            await User.create({
                name,
                email
            });
        }
        catch(error){
            console.log("db 저장과정에서 error 발생")
        }
    }
    return res.redirect('index.html');
}

export const board = async(req,res) => {
    const boards = await Board.find({});
    return res.render("board.html", {boards});
}

export const loadboards = async(req,res) => {
    const boards = await Board.find({});
    return res.json({boards});
}

export const getWrite = async(req,res) => {
    return res.render("write.html");
}

export const postWrite = async(req,res) => {
    const {title, contents} = req.body;
    var dates = new Date();
    var year = dates.getFullYear();
    var month = dates.getMonth();
    var day = dates.getDate();
    var date = {"year": year, "month": month, "day": day};
    try{
        await Board.create({
            title,
            contents,
            date
        });
    }
    catch(error){
        console.log('db 저장과정에서 error 발생')
    }

    return res.redirect('board.html');
}

export const getContents = async(req,res) => {
    return res.render("contents.html");
}

export const postContents = async(req,res) =>{
    const {index, contents} = req.body;
    try{
        await Board.create({
            index,
            contents
        });
    }
    catch(error){
        console.log('db 저장과정에서 error 발생')
    }

    return res.redirect("/contents.html/?index=" + index);
}