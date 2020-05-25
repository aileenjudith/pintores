// Transportamos la galeria express
const express = require('express');
//Genera un objeto con express
const app = express();
//Especificando un directori publico
app.use(express.static(__dirname + '/public'));
//Arrancando el servidor
app.listen(3000, ()=> {
console.log("Escuchando el puerto 3000");
});
