const Migration = artisfacts.require("Migrations");

const MintTest = artisfacts.require("Koko");

module.exports = function (deployer) {
  deployer.deploy(Migration);
};
