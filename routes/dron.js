/*
const router = require("express").Router();
const dronController = require("../controllers/dron.js");
const fileUpload = require("../services/fileUpload.js");

router.get("/", dronController.getAll);
router.get("/s", dronController.getByTitle);
router.get("/add", dronController.getAddForm);
router.get("/:id", dronController.getById);
router.get("/edit/:id", dronController.getUpdateForm);
router.post("/", fileUpload.single("dron"), dronController.createOne);
router.put("/:id", dronController.updateOne);
router.delete("/:id", dronController.deleteOne);

module.exports = router;
*/