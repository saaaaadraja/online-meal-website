const mongoose=require('mongoose');

const schema=mongoose.Schema;

const orderSchema=new schema({
    name:{
        type:String,
        required:true,
    },
    adress:{
        type:String,
        required:true,
    },
    dish:{
        type:String,
        required:true,
    }
},{timestamps:true})


const order=mongoose.model('order',orderSchema);

module.exports=order;