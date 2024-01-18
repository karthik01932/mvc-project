const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir,'data','Products.json');


const getProductsFromFile = (cb) =>{

    fs.readFile(p,(err,fileContent)=>{
        if(err){
            cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }
    })
}

let products = [];
module.exports = class Product {
    constructor(t,s){
        this.title = t;
        // this.size = s;
    }
    save(){
        getProductsFromFile(products =>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log(err);
            });
        });
        
    }
    static fetchAll(cb){
        getProductsFromFile(cb);
    }
}