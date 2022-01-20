const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name:{type:String, required:[true,'name is required']},
    description:{type:String, required:[true,'description is required']},
    stockCount:{type:Number,required:[true,'count is required'], min:[0,'value cannot be negative']},       //available stock
    salesPrice:{type:Number,required:[true,'value cannot be empty'],min:[0,'value cannot be negative']},    //selling price
    costPrice:{type:Number,required:[true,'value cannot be empty'],min:[0,'value cannot be negative']},     //cost price
    taxRate:{type:Number,required:[true,'value cannot be empty'],min:[0,'value cannot be negative']},       //tax slab
    minCount:{type:Number,required:[true,'value cannot be empty'],min:[0,'value cannot be negative']},      //reorder point
    category:{type:String},                                                                                 //named category
},
{timestamps:true}
);

const Item = mongoose.model('Item',itemSchema);
module.exports = {Item,itemSchema};