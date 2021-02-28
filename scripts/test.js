fs = require("fs");
path = require("path")

const contractAddress = "0xaa608FE67f3BAb163d843c67798Bd45B2949eAF0";

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
  let waifu = await contract.waifus(0);
  console.log(waifu)
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });