import React, { Component } from "react";

class LifeCycleD extends Component {
  constructor() {
    super();
    this.state = { name: "Ayush" };
    console.log("LifeCycleD : Constructor()");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleD : getDerivedStateFromProps()");
    return null;
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log("LifeCycleD : shouldComponentUpdate()");
    return true;
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("LifeCycleD : getSnapshotBeforeUpdate()");
    return null;
  };

  componentDidMount = () => {
    console.log("LifeCycleD : componentDidMount()");
  };

  render() {
    console.log("LifeCycleD : render()");
    return <div>LifeCycleD</div>;
  }
}

export default LifeCycleD;
