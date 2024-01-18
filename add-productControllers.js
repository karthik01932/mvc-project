const path = require('path');
const rootDir = require('../util/path');
const Product = require('../models/add-productModel');

exports.getAddProduct = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}