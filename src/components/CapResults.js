import React, { Component } from "react";
import { Card, Placeholder, Form, Button, Statistic } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import web3 from "../ethereum/web3";
import cappage from "../ethereum/cappage";

class CapResults extends Component {
  state = {
    loading: false,
    resultsShown: false,
    capCount: 0,
    searchedValue: "",
    searchedHashedValue: "",
  };

  handleLoadingClick = async () => {
    this.setState({
      loading: true,
      resultsShown: true,
      capCount: this.state.capCount,
      searchedValue: this.props.value,
      searchedHashedValue: this.props.hashedValue,
    });
    let capCount = await this.getCapResults();
    this.setState({
      loading: false,
      resultsShown: true,
      capCount: capCount,
      searchedValue: this.props.value,
      searchedHashedValue: this.props.hashedValue,
    });
  };

  handleCallCap = async () => {
    this.setState({
      loading: true,
      resultsShown: true,
      capCount: this.state.capCount,
      searchedValue: this.state.searchedValue,
      searchedHashedValue: this.state.searchedHashedValue,
    });
    const accounts = await web3.eth.getAccounts();
    await cappage.methods.callCap(this.props.hashedValue).send({
      from: accounts[0],
    });
    let capCount = await this.getCapResults();
    this.setState({
      loading: false,
      resultsShown: true,
      capCount: capCount,
      searchedValue: this.state.searchedValue,
      searchedHashedValue: this.state.searchedHashedValue,
    });
  };

  getCapResults = async () => {
    let hashedValue = this.props.hashedValue;
    const res = await cappage.methods.capMap(hashedValue).call();
    return res;
  };

  render() {
    const { loading, resultsShown } = this.state;

    return (
      <div>
        <Form>
          <Form.Field
            style={{
              marginTop: "15px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              primary
              animated
              size="large"
              loading={loading}
              onClick={this.handleLoadingClick}
            >
              <Button.Content visible>Get Cap Info</Button.Content>
              <Button.Content hidden>Explore 🧢</Button.Content>
            </Button>
          </Form.Field>
        </Form>
        <br />
        <div
          style={resultsShown ? {} : { textAlign: "center", display: "none" }}
        >
          <em>
            <b>Hash: </b>
            {this.state.searchedHashedValue}
          </em>
          <br />
          <b>Text: </b>
          {this.state.searchedValue}
        </div>
        <br />
        <Card.Group
          itemsPerRow={2}
          stackable
          style={resultsShown ? {} : { display: "none" }}
        >
          <Card raised>
            <Card.Content textAlign="center">
              {loading ? (
                <Placeholder>
                  <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                </Placeholder>
              ) : (
                <Statistic>
                  <Statistic.Value>{this.state.capCount}</Statistic.Value>
                  <Statistic.Label>Total 🧢s</Statistic.Label>
                </Statistic>
              )}
            </Card.Content>
          </Card>
          <Card
            raised
            onClick={this.handleCallCap}
            style={
              loading ? {} : { borderStyle: "solid", borderColor: "#2196f3" }
            }
          >
            <Card.Content textAlign="center">
              {loading ? (
                <Placeholder>
                  <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                </Placeholder>
              ) : (
                <h1
                  marginTop="auto"
                  marginBottom="auto"
                  style={{ fontSize: "4em" }}
                >
                  Call 🧢
                </h1>
              )}
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}

export default CapResults;
