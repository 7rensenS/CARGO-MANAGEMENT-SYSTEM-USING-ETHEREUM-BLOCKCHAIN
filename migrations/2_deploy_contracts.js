const CargoDapp = artifacts.require("CargoDapp");

module.exports = function(deployer) {
  deployer.deploy(CargoDapp);
};
