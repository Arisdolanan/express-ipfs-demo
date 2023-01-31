const { CID, create } = require("ipfs-http-client");

const IPFSclient = create();

module.exports = {
  IPFSclient,
  CID,
};
