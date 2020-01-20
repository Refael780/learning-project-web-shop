// ========================================
// Product MODEL CONFIG
// ========================================

var mongoose=require("mongoose");
var ProductSchema=mongoose.Schema({
    name: String,
    image:[{
        type:String
    }], 
    description: String,
    price:String
});
module.exports=mongoose.model("Product",ProductSchema);

/*
,
    comments:[
        {

            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
*/