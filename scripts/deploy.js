const MATIC_VRF_COORDINATOR = '0x8C7382F9D8f56b33781fE506E897a4F1e2d17255'
const MATIC_LINKTOKEN = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB'
const MATIC_KEYHASH = '0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4'

async function main() {

    const [deployer] = await ethers.getSigners();
  
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const CreateWaifu = await ethers.getContractFactory("CreateWaifu");
    const waifu = await CreateWaifu.deploy(MATIC_VRF_COORDINATOR, MATIC_LINKTOKEN, MATIC_KEYHASH);

    console.log("CreateWaifu Contract address:", waifu.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });