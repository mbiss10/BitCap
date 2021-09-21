import "semantic-ui-css/semantic.min.css";
import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import TextAreaPane from "./components/TextAreaPane";
import LeaderboardPane from "./components/LeaderboardPane";

class App extends Component {
  panes = [
    { menuItem: "Search 🧢 By Text", render: () => <TextAreaPane /> },
    {
      menuItem: "🧢 Leaderboard",
      render: () => <LeaderboardPane />,
    },
    {
      menuItem: "Useful Resources/Links",
      render: () => (
        <Tab.Pane>
          <ul>
            <li>
              <a href="https://testnets.opensea.io/">OpenSea Testnet</a>
              <ul>
                <li>
                  (Adding a feature to randomly reward users with an NFT when
                  they call 🧢 is on the to-do list. The probability of
                  generating an NFT would be inversely proportional to either
                  (a) the number of 🧢s called on the particular hash/text, or
                  (b) the number of NFTs already awarded for that hash/text.
                  This incentivizes people to be some of the first to call 🧢
                  and makes NFTs minted at higher 🧢 counts relatively rarer.)
                </li>
              </ul>
            </li>
            <li>
              <a href="https://faucet.rinkeby.io/">Rinkeby Faucet</a>
            </li>
            <li>
              Donate to the creator @ bissell.eth -- ETH, BTC, or Bored Ape NFTs
              are all valid payment types.
            </li>
          </ul>
        </Tab.Pane>
      ),
    },
  ];

  render() {
    return (
      <div
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "10px",
          width: "90%",
        }}
      >
        <h1 style={{ margin: 0, padding: 0 }}>BitCap</h1>
        <h4 style={{ marginTop: 0, paddingTop: 0 }}>
          <em>The Decentralized Way to Check Out & Call Out What's 🧢</em>
        </h4>
        <Tab panes={this.panes} />
        <br></br>
      </div>
    );
  }
}

export default App;
