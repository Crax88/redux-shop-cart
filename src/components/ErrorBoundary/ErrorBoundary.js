import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

export default class ErrorBoundary extends Component {
  state = { error: false };
  componentDidCatch() {
    this.setState({ error: true });
  }
  render() {
    if (this.state.error) return <ErrorIndicator />;
    return this.props.children;
  }
}
