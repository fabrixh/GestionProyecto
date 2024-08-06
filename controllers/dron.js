const crypto = require("crypto");
const dataSource = require("../services/datasource.js");
const fileUpload = require("../services/fileUpload.js");

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

  /*
  async updateOne(req, res) {
    fileUpload.single("image")(req, res, async (err) => {
      if (err) {
        return res.status(500).send("Error al cargar el archivo");
      }

      // Manejo de archivo
      let imageFilePath = req.file ? `/img/productsImg/${req.file.filename}` : req.body.currentImage || "/img/productsImg/default.png";

      const { id } = req.params;
      const { nombre, marca, modelo, descripcion, categoria, precio, peso, duracionBateria, camara, tipoSensores, altura, velocidad, descuento } = req.body;

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
  },

  async deleteOne(req, res) {
    const { id } = req.params;
    this.drones = await dataSource.load();
    const dron = this.drones.find((dron) => dron.id === id);

    if (dron) {
      const filteredDrones = this.drones.filter((dron) => {
        return dron.id !== id;
      });
      await dataSource.save(filteredDrones);
      if (dron.image && dron.image !== '/img/productsImg/default.png') {
        await dataSource.removeFile(dron.image);
      }
      res.redirect("/productos");
    } else {
      res.status(404).send("Producto no encontrado");
    }
  },
  */
};

module.exports = dronController;