import User from "../models/User.js";

export const home = async (req, res) => {
    
    const {name, email} = req.query;
    if (email!=null)
    {
        console.log('hi');
        const useremailExists = await User.exists({email});
        if(useremailExists){
            console.log("이미 가입된 회원입니다.");
        }
        else{
            try{
                console.log('gg');
                await User.create({
                    name,
                    email
                });
            }
            catch(error){
                console.log("db 저장과정에서 error 발생")
            }
        }
    }
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

