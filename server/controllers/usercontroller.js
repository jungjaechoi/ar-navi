import User from "../models/User.js";

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

export const save_user_db = async(req,res) => {
    console.log('hi');
    const { name} = req.param;
    const usernameExists = await User.exists({name});
    if(usernameExists){
        console.log("이미 가입된 회원입니다.");
    }
    try{
        await User.create({
            name
        });
    }
    catch(error){
        console.log("db 저장과정에서 error 발생")
    }
} 