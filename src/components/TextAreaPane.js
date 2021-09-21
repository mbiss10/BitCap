import React, { Component } from "react";
import { TextArea, Form, Tab } from "semantic-ui-react";
import HashedValueLabel from "./HashedValueLabel";
import CapResults from "./CapResults";
import keccak256 from "keccak256";

class TextAreaPane extends Component {
  state = {
    value: "",
    hashedValue: "",
  };

  getHashedValue = () => {
    return this.state.value === ""
      ? ""
      : `0x${keccak256(this.state.value).toString("hex")}`;
  };

  handleTextChange = (e) => {
    this.setState({
      value: e.target.value,
      hashedValue: this.getHashedValue(e.target.value),
    });
  };

  render() {
    return (
      <Tab.Pane>
        <div
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "20px",
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Form>
            <TextArea
              onChange={(e) => this.handleTextChange(e)}
              placeholder="Enter some text that may or may not be cap"
            ></TextArea>
            <HashedValueLabel hashedValue={this.state.hashedValue} />
          </Form>
          <CapResults
            value={this.state.value}
            hashedValue={this.state.hashedValue}
          />
        </div>
      </Tab.Pane>
    );
  }
}

export default TextAreaPane;
