const path = require("node:path");
const crypto = require("node:crypto");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = path.join(__dirname, "../public/img/productsImg");
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const randomString = crypto.randomBytes(8).toString("hex");
    const extension = path.extname(file.originalname);
    const dron = "dron-" + randomString + extension;
    cb(null, dron);
  },
});

const fileUpload = multer({ storage });
module.exports = fileUpload;
