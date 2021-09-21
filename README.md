# BitCap - Solidity, Web3, & React Practice

**_Cap_** (🧢) ≈ a lie; BS; exaggeration   
**_No cap_** ≈ no lie; for real  
[ [Further slang background](https://thisinterestsme.com/blue-cap-emoji/) ]

---  

BitCap is a<sub><sup>\[n admittedly pretty dumb\]</sup></sub> decentralized application (or “dapp”) that allows users to search arbitrary text strings and:  
- “Call cap” on the text to indicate that it is, in fact, 🧢  
- View how many other users have called cap on the same text   


![ezgif com-gif-maker](https://user-images.githubusercontent.com/50077908/134106163-ba91f374-d890-4e45-9998-eb509553b9d2.gif)  


The app also provides a “leaderboard” view to display the hashes of text strings for which users have called 🧢, and the total number of 🧢s called. The actual text values of these hashes are deliberately not displayed, mostly for the fun game of guessing what others have deemed most worthy of calling 🧢 on.   


<img width="708" alt="Screen Shot 2021-09-20 at 11 04 05 PM" src="https://user-images.githubusercontent.com/50077908/134105710-42554278-dc5d-4d1a-9b62-4601fb661335.png">  

---  

BitCap requires the client's browser to be running a MetaMask wallet.  

The `Cappage` smart contract that underlies the application can be found at the address `0xD4991E65F1a331F8f695199aB6D882dD31CF5949` on the Rinkeby test network. The Solidity source code is available in this repository. It permits users to call 🧢 on 5 text inputs per day (using a pretty inefficient storage mechanism that could be greatly improved if the app were to be deployed to the Ethereum mainnet). 

The frontend was built using React.

---  

BitCap was mainly an exercise in smart contract / React development, as it was my first self-guided project in both of these areas. 
