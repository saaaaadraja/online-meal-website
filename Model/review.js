const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { stringify } = require('querystring');
const schema=mongoose.Schema;
const reviewSchema = new schema({
    title:{
    type:String,
       required:true,
    },
    content:{
        type:String,
        required:true,
    }
},{timeStamp:true});
const review=mongoose.model('message',reviewSchema);

module.exports=review;

