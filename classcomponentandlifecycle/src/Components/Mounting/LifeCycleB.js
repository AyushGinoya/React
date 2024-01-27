import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor() {
    super();

    this.state = { name: "Ayush" };
    console.log("LifeCycleB : Constructor()");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB : getDerivedStateFromProps()");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB : componentDidMount()");
  }
  render() {
    console.log("LifeCycleB : render()");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
