var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
        userName: String,
        password: String,
        products: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
        }]


});


UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
