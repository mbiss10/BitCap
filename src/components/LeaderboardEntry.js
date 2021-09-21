import React, { Component } from "react";
import { Label, Statistic } from "semantic-ui-react";

class LeaderboardEntry extends Component {
  render() {
    return (
      <div>
        <Statistic size="tiny">
          <Statistic.Value>🧢</Statistic.Value>
          <Statistic.Label>{this.props.count}</Statistic.Label>
        </Statistic>
        <Label style={{ marginLeft: "10px" }}>{this.props.content}</Label>
      </div>
    );
  }
}

export default LeaderboardEntry;
