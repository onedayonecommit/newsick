const MintNFT = artifacts.require("test");
// const NFT_Shop = artifacts.require("NFT_Shop");
module.exports = async function (deployer) {
    await deployer.deploy(MintNFT);
    const token = await MintNFT.deployed();
    console.log(token.address);
    // const token = await MintNFT.deployed();
    // await deployer.deploy(NFT_Shop, token.address);
    // const sellToken = await NFT_Shop.deployed();
};