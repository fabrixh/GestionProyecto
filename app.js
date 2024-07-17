const express = require("express");
const path = require("path");
const app = express();

// Configuración de EJS
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

// Definir la ubicación de los archivos estáticos
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('users/login');
});

app.get('/registro', (req, res) => {
    res.render('users/registro');
});

app.get('/detalle-producto', (req, res) => {
    res.render('products/detalle-producto');
});

app.get('/carrito-compra', (req, res) => {
    res.render('products/carrito-compra');
});

app.listen(3000, () => {
    console.log("Servidor corriendo");
});