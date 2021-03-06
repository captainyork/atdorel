const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const CryptoBlades = artifacts.require("CryptoBlades");
const Weapons = artifacts.require("Weapons");
const Promos = artifacts.require("Promos");

module.exports = async function (deployer, network, accounts) {
  await upgradeProxy(Weapons.address, Weapons, { deployer });
  await upgradeProxy(CryptoBlades.address, CryptoBlades, { deployer });
};
