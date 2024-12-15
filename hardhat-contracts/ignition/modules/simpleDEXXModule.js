/*import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";*/

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

/*

export default buildModule("SimpleDEXModule", (m) => {
  const tokenA = m.import("TokenAModule").contracts.TokenA;
  const tokenB = m.import("TokenBModule").contracts.TokenB;
  const simpleDEX = m.contract("SimpleDEX", [tokenA.address, tokenB.address]);

  return {
    contracts: [simpleDEX],
  };
});
*/


module.exports = buildModule("SimpleDEXXModule", (m) => {
  // Replace with the actual deployed addresses of TokenA and TokenB
  const tokenAAddress = "0x0E70D63bcFc8eD99C20403a8464f82c9dD19e15F"; // Replace with actual TokenA address
  const tokenBAddress = "0x372D440D197241F692D8f8A520a1e2ef5EC1Ba31"; // Replace with actual TokenB address

  // Define the SimpleDEX contract with tokenA and tokenB addresses
  const simpleDEXX = m.contract("contracts/SimpleDexx.sol:SimpleDEXX", [
    tokenAAddress,
    tokenBAddress,
  ]);

  return {
    contracts: [simpleDEXX],
  };
});