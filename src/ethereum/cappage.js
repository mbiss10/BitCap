import web3 from "./web3";
import Cappage from "./build/Cappage.json";

const instance = new web3.eth.Contract(
  Cappage.abi,
  "0xD4991E65F1a331F8f695199aB6D882dD31CF5949"
);

export default instance;
