//import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

/*
export default buildModule("TokenAModule", (m) => {
  const tokenA = m.contract("TokenA", ["TokenA", "TKA"]);

  return {
    contracts: [tokenA],
  };
});*/

/*
module.exports = buildModule("TokenAModule", (m) => {
  const tokenA = m.contract("TokenA", ["TokenA", "TKA"]);

  return {
    contracts: [tokenA],
  };
});*/



module.exports = buildModule("TokenAModule", (m) => {
  const tokenA = m.contract("contracts/tokenA.sol:TokenA"); // No constructor arguments

  return {
    contracts: [tokenA],
  };
});