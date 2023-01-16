const Migration = artisfacts.require("Migrations");
const MintTest = artisfacts.require("Koko");

module.exports = async function (deployer) {
  //   deployer.deploy(Migration);
  const yoyo = await deployer.deploy(MintTest);
  console.log(yoyo.address);
};
