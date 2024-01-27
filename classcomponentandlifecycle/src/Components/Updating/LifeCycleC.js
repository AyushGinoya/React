import React,{Component} from "react"
import LifeCycleD from "./LifeCycleD";

class LifeCycleC extends Component{

    constructor(){
        super()
        this.state = {name : "Ayush"}
        console.log("LifeCycleC : Constructor()")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleC : getDerivedStateFromProps()");
        return null;
    }

    shouldComponentUpdate = (nextProps, nextState) => {
      console.log("LifeCycleC : shouldComponentUpdate()");
      return true
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
      console.log("LifeCycleC : getSnapshotBeforeUpdate()");
      return null
    }
    
    componentDidMount = () => {
      console.log("LifeCycleC : componentDidMount()");
    }

    changeState = () => {
      this.setState({
        name : "Ayushi"
      })
    }
    
    render() {
      console.log("LifeCycleC : render()");
        return (
             <div>
                <div>
                    LifeCycleC
                </div>
                <button onClick={this.changeState}>Change Name</button>
                <LifeCycleD></LifeCycleD>
             </div>
        );
    }
}

export default LifeCycleC