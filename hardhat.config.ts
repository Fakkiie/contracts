import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "hardhat-testbeacon";  

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  paths: { tests: "test" },
};

export default config;
