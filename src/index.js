const ex = require('express');
const app = ex();
const path = require('path');
const mdb = require('mongoose');
const port = process.env.PORT  || 4444;
const apk = require("../src/routes/user");
require('dotenv').config();


//midleware
app.use(ex.json());
app.use('/api', apk);
app.use(ex.static(path.join(__dirname, 'public'))); 

//Routes
app.get('/', (req,res) => {
});

//Conexion a Mongo
mdb.connect(process.env.MDBU_RI)
    .then(() => console.log("Datos Conectados"))
    .catch((error) => console.error(error));


app.listen(port, () => console.log('Servidor en ', port));