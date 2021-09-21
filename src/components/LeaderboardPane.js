import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import cappage from "../ethereum/cappage";
import LeaderboardEntry from "./LeaderboardEntry";

class LeaderboardPane extends Component {
  state = {
    capCount: {},
  };

  async componentDidMount() {
    const allData = await cappage.getPastEvents("allEvents", { fromBlock: 1 });
    let capCount = {};
    allData.forEach((x) => {
      const content = x.returnValues.content;
      capCount[content] = capCount[content] ? capCount[content] + 1 : 1;
    });
    this.setState({
      capCount: capCount,
    });
  }

  getEntries() {
    return Object.keys(this.state.capCount).map((key) => {
      return (
        <LeaderboardEntry count={this.state.capCount[key]} content={key} />
      );
    });
  }

  render() {
    return (
      <Tab.Pane>
        <h3> The Leaderboard</h3>
        {this.state.capCount.length === 0 ? (
          <p>Loading...</p>
        ) : (
          this.getEntries()
        )}
      </Tab.Pane>
    );
  }
}

export default LeaderboardPane;
