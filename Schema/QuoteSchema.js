const mongoose = require("mongoose");
const {Schema,model} = mongoose

const QuoteSchema = new Schema({
    Quote:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true
    },
    len:{
        type:Number,
        required:true
    }
})


module.exports = model("Quote",QuoteSchema);
