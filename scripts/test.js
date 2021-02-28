fs = require("fs");
path = require("path")

const contractAddress = "0x873597E0CC137a72Fe928C376d1F7CF00C2e6D3D";

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

  // let tx = await contract.requestNewRandomWaifu(717, "bfjs1", "fkjd1", "cjdkcc1", "sjs1");
  // console.log("Tx Info: ", tx)
  // let waifu = await contract.waifus(0);
  // console.log(waifu);
  // let tx= await contract.transfer("0", "0xD19eaf5e9946c487F15De00d4f2d8763283E486a", "0x6528Fa8c77A99D0Ca68178e982aEfa44B664f19f");
  // console.log(tx)
  let buytx = await contract.buyWaifu(0,{
    gasLimit: 300000,
    from: owner.address,
    value: ethers.utils.parseEther("1")
  })
  console.log(buytx);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });