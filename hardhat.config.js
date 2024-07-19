require("@matterlabs/hardhat-zksync-solc");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    defaultnetwork: 'scrollsepolia',
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    hardhat: {},
    scrollsepolia: {
      url: 'https://scroll-sepolia.blockpi.network/v1/rpc/public',
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    }  
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
