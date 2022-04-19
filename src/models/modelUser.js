const mdb = require("mongoose");

const userEsquema = mdb.Schema({
    name: {
        type: String,
        required:true
    },

    password:{
        type:String,
        required:true
    }
});

module.exports = mdb.model('modelUser',userEsquema);