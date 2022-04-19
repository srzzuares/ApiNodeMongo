const ex = require('express');
const usEs = require("../models/modelUser");
const usController = require("../controller/controllerUer"); 
const ruta = ex.Router();


//Create User
ruta.post("/users", (req,res) => {
    const usuarioNew = usEs(req.body);
    usuarioNew 
        .save() 
        .then((data) => res.json(data))  
        .catch((error) => res.json({message: error}));
});

//Obtener datos del Usuario
ruta.get("/users", (req,res) => {
    /*usEs.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));*/
});

//Obtener un usuario por id
ruta.get("/users/:id", (req,res) => {
    const { id } = req.params;
    usEs.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});

//Actualizacion de datos de un usuario por el id
ruta.put("/users/:id", (req,res) => {
    const {id} = req.params;
    const {name,age,email} = req.body;
    usEs
        .updateOne({_id:id},{$set:{name,age,email}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));

});

//Eliminar usuario or id
ruta.delete("/users/:id", (req,res) => {
    const {id} = req.params;
    usEs
        .remove({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});

module.exports = ruta;