require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: ["bda61194a57f792ebf1f8b28bdfa315482ac23ac4a0bf419bebd1d0025d875ae"]
    }
  }
};
