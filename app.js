// Librerías, módulos, variables, etc.

const express = require('express');

const app = express();

// Configuración del servidor

app.use('/static', express.static(__dirname + '/public/' ))
app.use('/imagenes', express.static(__dirname + '/public/images' )) 

// Rutas

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})

// Levantar el server
let puerto = process.env.PORT || 3000;

app.listen( puerto, ()=> {
    console.log("servidor corriendo en el puerto " + puerto);
})
