/*import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";*/

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");












/*
export default buildModule("TokenAModule", (m) => {
  const tokenA = m.contract("TokenB", ["TokenB", "TKB"]);

  return {
    contracts: [tokenB],
  };
});
*/

module.exports = buildModule("TokenBModule", (m) => {
  const tokenB = m.contract("contracts/tokenB.sol:TokenB"); // Using correct path for TokenB contract, no constructor arguments

  return {
    contracts: [tokenB],
  };
});