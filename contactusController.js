const path = require('path');
const rootDir = require('../util/path');


exports.getContactus = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
    // console.log(res.body);
}

exports.postContactus = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/success');
    
}