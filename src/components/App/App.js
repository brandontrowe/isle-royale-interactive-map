import React, { Component } from "react";
import Map from "../Map/Map";
import "./App.css";

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="App">
                <div className="map-wrapper">
                    <Map camps={this.props.campgrounds} />
                </div>
            </div>
        );
    }
}

export default App;
