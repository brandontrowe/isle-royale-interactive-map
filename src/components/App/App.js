import React, { Component } from "react";
import Map from "../Map/Map";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="map-wrapper">
                    <Map
                        camps={this.props.campgrounds}
                        quickReference={this.props.quickReference}
                        addPointA={this.props.addPointA}
                        addPointB={this.props.addPointB}
                    />
                </div>
            </div>
        );
    }
}

export default App;
