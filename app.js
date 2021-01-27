const express = require('express');
const app = express();
const path = require('path');

//MIDDLEWARE
app.use(express.static('public'));

//CREAR LAS RUTAS
app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname, './views', 'home.html'));
})

app.get('/home', (req, res)=> res.sendFile(path.resolve(__dirname,'./views','home.html')));

app.get('/register', (req, res)=> res.sendFile(path.resolve(__dirname,'./views','register.html')));

app.get('/login', (req, res)=> res.sendFile(path.resolve(__dirname,'./views','login.html')));


//ESCUCHAR EL SERVIDOR
app.listen(3001, function(){
    console.log('Servidor corriendo en el puerto 3001');
})
