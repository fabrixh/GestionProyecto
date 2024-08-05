const express = require("express");
const path = require("path");
const app = express();

const methodOverride = require("method-override");
//project modules
const dronRouter = require("./routes/dron.js");

// Definir la ubicación de los archivos estáticos
app.use(express.static('public'));
// Configuración de EJS
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

const port = process.env.PORT ?? 3001;

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

// Incluir las rutas del controlador de drones
app.use('/productos', dronRouter);

app.use((req, res) => {
    res.status(404).render("not-found");
  });


  app.listen(port, (err) =>
    console.log(
      err
        ? `Server failed to launch: ${err.message}`
        : `
  ------------------------------------------
  Server running on http://127.0.0.1:${port}
  
  CTRL + C to cancel...
  ------------------------------------------
  `
    )
  );