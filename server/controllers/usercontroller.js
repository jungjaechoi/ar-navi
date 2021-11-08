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