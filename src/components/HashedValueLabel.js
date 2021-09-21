import React, { Component } from "react";
import { Label } from "semantic-ui-react";

class HashedValueLabel extends Component {
  render() {
    return (
      <div>
        <Label horizontal>Hash (keccak256):</Label>
        {this.props.hashedValue}
      </div>
    );
  }
}

export default HashedValueLabel;
