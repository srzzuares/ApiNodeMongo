const user = require('../models/modelUser');

//See
module.exports.mostrar = (req,res) => {
        user.find({}, (error,modeluser) => {
            if(error){
                return res.status(500).json({
                    message:'Error mostrando los alumnos'
                })
            }
            console.log(modeluser); 
        })
}


