const model = require('../model/model');
exports.homeRoutes = async(req, res)=>{
    try{
        const data = await model.find({});
        res.render("user", {allData:data})
    }catch(error){
        console.log(error);
    }
};