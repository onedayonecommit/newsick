const Migration = artisfacts.require("Migrations");
<<<<<<< HEAD
const MintTest = artisfacts.require("Koko");

module.exports = async function (deployer) {
  //   deployer.deploy(Migration);
  const yoyo = await deployer.deploy(MintTest);
  console.log(yoyo.address);
=======

module.exports = function (deployer) {
  deployer.deploy(Migration);
>>>>>>> 7686dd9338952151aa623ccf8840bf5dd37e7ccd
};
