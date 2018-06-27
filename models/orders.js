var mongoose = require('mongoose');
const Schema = mongoose.Schema
const ord = new Schema({
    
    username:String,
    email:String,
    phone:String,
    address:{address:String},
    ordertimecreated:String,
    gameid:String,
    title:String,
    price: String,
    orderqt:Number,
    totalprice:Number,
    status: Number,
    neworused:Number,
    createdetaandtime:String,


})
module.exports = mongoose.model('orders',ord)



// 1 new === 0 used
// 1 panding === 0 ok --- 2 === done
