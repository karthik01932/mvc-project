const path = require('path');
const rootDir = require('../util/path');
const Product = require('../models/add-productModel');

exports.getShop = (req,res,next)=>{
    Product.fetchAll(products => {
        res.sendFile(path.join(rootDir,'views','shop.html'))
    });
    
}