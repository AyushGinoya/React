import React, { Component } from "react";

class Home extends Component {
    constructor(){
        super();
        this.state = {
            text : '',
            count : 0
        };
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    increment = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    render(){
        return(
            <div>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <p>Input Value: {this.state.text}</p>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Home;
