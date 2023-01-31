const { CID, IPFSclient } = require("../services/ipfs");

const getFile = async (req, res) => {};

const uploadFile = async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      let image = req.files.image;

      const file = {
        path: "/",
        content: image.data,
      };

      const added = await IPFSclient.add(file);

      res.send({
        status: true,
        message: "file is uploaded",
        data: {
          name: image.name,
          size: image.size,
          path: process.env.BASE_URL + added.path,
        },
      });
    }
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error,
    });
  }
};

const downloadFile = (req, res) => {};

module.exports = {
  getFile,
  uploadFile,
  downloadFile,
};
