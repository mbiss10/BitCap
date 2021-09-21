const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledCappage = require("./build/Cappage.json");

// HDWalletProvider specifies which account we want to unlock/use as a source of Ether
// Also specifies the node we will use to deploy the contract

const provider = new HDWalletProvider(
  "{Metamask Mnemonic}",
  "{Infura API URL}"
);
const web3 = new Web3(provider);

const deploy = async () => {
  // Get list of unlocked accounts (since each mnemonic / metamask login has a bunch of associated accounts)
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(compiledCappage.abi)
    .deploy({ data: compiledCappage.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to (address):", result.options.address);
};
deploy();
