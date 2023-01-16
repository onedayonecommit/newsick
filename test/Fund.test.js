const Mint = artifacts.require("Test");
let aaa;

describe.only("Mint", () => {
  it("deployed", async () => {
    aaa = await Mint.deployed();
    console.log(aaa);
  });
});
