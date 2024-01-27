import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor() {
    super();

    this.state = { name: "Ayush" };
    console.log("LifeCycleA : Constructor()");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA : getDerivedStateFromProps()");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA : componentDidMount()");
  }
  render() {
    console.log("LifeCycleA : render()");
    return (
    <><LifeCycleB></LifeCycleB><div>LifeCycleA</div></>);
  }
}

export default LifeCycleA;