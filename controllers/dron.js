const crypto = require("crypto");
const fs = require('fs');
const path = require('path');
const datasourcePath = path.join(__dirname, '../models/drones.json');
const dataSource = require("../services/datasource.js");
const fileUpload = require("../services/fileUpload.js");

// Leer el archivo JSON
const leerDatos = () => {
  return JSON.parse(fs.readFileSync(datasourcePath, 'utf8'));
};

// Escribir en el archivo JSON
const escribirDatos = (datos) => {
  fs.writeFileSync(datasourcePath, JSON.stringify(datos, null, 2), 'utf8');
};

const dronController = {
  drones: null,

  async getProductos(req, res) {
    this.drones = await dataSource.load();
    res.render("products/productos", { drones: this.drones });
  },

  async getProductoById(req, res) {
    this.drones = await dataSource.load();
    const { id } = req.params;
    const dron = this.drones.find((dron) => dron.id === id);
    if (dron) {
      res.render("products/detalle-producto", { dron });
    } else {
      res.status(404).send("Producto no encontrado");
    }
  },

  async getEditForm(req, res) {
    this.drones = await dataSource.load();
    const { id } = req.params;
    const dron = this.drones.find((dron) => dron.id === id);
    if (dron) {
      res.render("products/editarProducto", { dron });
    } else {
      res.status(404).send("Producto no encontrado");
    }
  },

  getAddForm(req, res) {
    res.render("products/agregarProducto");
  },

  async createOne(req, res) {
    try {
      // Manejo de archivo
      const imageFilePath = req.file && req.file.filename
        ? `/img/productsImg/${req.file.filename}`
        : "/img/productsImg/default.png";

      // Crear nuevo dron
      const { nombre, marca, modelo, descripcion, categoria, precio, peso, duracionBateria, camara, tipoSensores, altura, velocidad, descuento } = req.body;
      const nuevoDron = {
        id: crypto.randomUUID(),
        nombre,
        marca,
        modelo,
        descripcion,
        categoria,
        precio: parseFloat(precio),
        peso,
        duracionBateria,
        camara,
        tipoSensores,
        altura,
        velocidad,
        descuento: parseFloat(descuento),
        image: imageFilePath
      };

      // Cargar drones, agregar nuevo y guardar
      this.drones = await dataSource.load();
      this.drones.push(nuevoDron);
      await dataSource.save(this.drones);

      res.redirect("/productos");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al agregar el producto");
    }
  },

  async updateOne(req, res) {
    try {
      console.log("Update request received");
      fileUpload.single("image")(req, res, async (err) => {
        if (err) {
          console.error("File upload error:", err);
          return res.status(500).send("Error al cargar el archivo");
        }
        console.log("File uploaded successfully");
  
        const { id } = req.params;
        const { nombre, marca, modelo, descripcion, categoria, precio, peso, duracionBateria, camara, tipoSensores, altura, velocidad, descuento } = req.body;
        let imageFilePath = req.file ? `/img/productsImg/${req.file.filename}` : req.body.currentImage || "/img/productsImg/default.png";
  
        this.drones = await dataSource.load();
        const updatedDrones = this.drones.map((dron) =>
          dron.id === id
            ? {
                id,
                nombre,
                marca,
                modelo,
                descripcion,
                categoria,
                precio: parseFloat(precio),
                peso,
                duracionBateria,
                camara,
                tipoSensores,
                altura,
                velocidad,
                descuento: parseFloat(descuento),
                image: imageFilePath
              }
            : dron
        );
  
        await dataSource.save(updatedDrones);
        res.redirect(`/productos/${id}`);
      });
    } catch (error) {
      console.error("Update error:", error);
      res.status(500).send("Error al actualizar el producto");
    }
  },

  async eliminarProducto(req, res) {
    try {
      const { id } = req.params;
      this.drones = await dataSource.load();
      const dron = this.drones.find((dron) => dron.id === id);
  
      if (dron) {
        const filteredDrones = this.drones.filter((dron) => dron.id !== id);
        await dataSource.save(filteredDrones);
        if (dron.image && dron.image !== '/img/productsImg/default.png') {
          fs.unlinkSync(path.join(__dirname, '../public', dron.image));
        }
        res.redirect("/productos");
      } else {
        res.status(404).send("Producto no encontrado");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al eliminar el producto");
    }
  }
};

module.exports = dronController;
