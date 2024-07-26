const fs = require("node:fs/promises");
const path = require("node:path");

const datasource = {
  filePath: path.resolve(__dirname, "../models/drones.json"),

  async load() {
    const jsonDrones = await fs.readFile(this.filePath, "");
    const drones = JSON.parse(jsonDrones);
    return drones;
  },
  async save(data) {
    const jsonData = JSON.stringify(data);
    await fs.writeFile(this.filePath, jsonData, "utf-8");
  },

  async removeFile(filePath) {
    const file = path.join(__dirname, "../public", filePath);
    try {
      await fs.unlink(file);
      console.log(`file ${filePath} has been deleted.`);
    } catch (err) {
      console.error(err.message);
    }
  },
};

module.exports = datasource;
