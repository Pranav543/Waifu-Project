require("@nomiclabs/hardhat-ethers");
// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */

PRIVATE_KEY = '5e75adad7a85442fee73273bff7fc23c0a710a8337d539205cb6569b5dc40d34'

module.exports = {
  solidity: "0.6.2",
  networks: {
    matic: {
      url: `https://rpc-mumbai.matic.today`,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 80001
    }
  }
};

