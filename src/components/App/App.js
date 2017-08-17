import React, { Component } from "react";
import Map from "../Map/Map";
import "./App.css";

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="App">
                <Map camps={this.props.campgrounds} />
            </div>
        );
    }
}

export default App;
