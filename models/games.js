var mongoose = require('mongoose');



const Schema = mongoose.Schema

const add = new Schema({
    title:String,
    content: String,
    price: String,
    qt:Number,
    status: Number,
    neworused:Number,
    createdetaandtime:String,
    viewsconts:Number,
    url:String
})


module.exports = mongoose.model('games',add)

// if qt< 0  hide ----- if there is alot startus = 1----qt=1 show
//