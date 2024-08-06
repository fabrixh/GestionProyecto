const express = require('express');
const router = express.Router();
const dronController = require('../controllers/dron');
const fileUpload = require('../services/fileUpload');

// Rutas de productos
router.get('/', dronController.getProductos); // Mostrar todos los productos
router.get('/add', dronController.getAddForm); // Mostrar formulario para agregar producto
router.get('/:id', dronController.getProductoById); // Mostrar detalles de un producto

module.exports = router;
