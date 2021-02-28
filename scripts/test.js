fs = require("fs");
path = require("path")

const contractAddress = "0x3618a00e2aDd9A924D1cA2C623F065599573FAD6";

const main = async () => {
  const [owner] = await ethers.getSigners();

  const rawAbi = fs
    .readFileSync(
      path.resolve(
        __dirname,
        "../artifacts/contracts/CreateWaifu.sol/CreateWaifu.json"
      )
    )
    .toString();
  const abi = JSON.parse(rawAbi).abi;

  const contract = new ethers.Contract(contractAddress, abi, owner);

  // let tx = await contract.requestNewRandomWaifu(77, "bfjs", "fkjd", "cjdkcc");
  // console.log("Tx: ", tx)
  let waifu = await contract.waifus("0");
  console.log(waifu);
  let tx= await contract.transfer("0", "0xD19eaf5e9946c487F15De00d4f2d8763283E486a", "0x6528Fa8c77A99D0Ca68178e982aEfa44B664f19f");
  console.log(tx)
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });