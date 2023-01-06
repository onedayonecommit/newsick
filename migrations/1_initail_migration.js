const Migration = artisfacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(Migration);
};
