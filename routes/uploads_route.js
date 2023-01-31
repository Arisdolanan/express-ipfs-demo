const express = require("express");
const router = express.Router();
const uploadController = require("../controller/upload_controller");

router.post("/upload", uploadController.uploadFile);
// router.get("/get/:cid", uploadController.getFile);

module.exports = router;
