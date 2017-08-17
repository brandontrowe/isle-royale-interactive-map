import React, { Component } from "react";
import L from "leaflet";
import "./Map.css";

class App extends Component {
    componentDidMount() {
        const { camps } = this.props;
        const map = L.map("map").setView([47.9959, -88.9093], 10);
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        for (const id in camps) {
            L.marker([camps[id].location.lat, camps[id].location.long])
                .addTo(map)
                .bindPopup("<strong>" + camps[id] + " Campground</strong>");
        }
    }
    render() {
        return <div className="Map" id="map" />;
    }
}

export default App;
