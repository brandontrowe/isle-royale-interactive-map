import React, { Component } from "react";
import MapTypeMenu from "../MapTypeMenu/MapTypeMenu";
import QuickReference from "../QuickReference/QuickReference";
import { defaultIcon, pointAIcon, pointBIcon } from "../../data/icons";
import "./Map.css";

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mapRef: null,
            mapTypes: [
                "USATopo",
                "Imagery",
                "NationalGeographic",
                "Topographic"
            ],
            mapLayer: null,
            mapMarkers: {},
            focusedRefPoint: "a"
        };

        this.setState = this.setState.bind(this);
        this.toggleMapType = this.toggleMapType.bind(this);
        this.setQuickRefPoint = this.setQuickRefPoint.bind(this);
        this.setFocusedPoint = this.setFocusedPoint.bind(this);
    }

    componentDidMount() {
        const { camps } = this.props;
        const map = window.L.map("map").setView([47.9889, -88.8293], 10);
        const mapLayer = window.L.esri.basemapLayer("USATopo").addTo(map);
        let markers = {};
        for (const id in camps) {
            markers[id] = window.L
                .marker([camps[id].location.lat, camps[id].location.long], {
                    icon: defaultIcon
                })
                .addTo(map)
                .bindPopup("<strong>" + camps[id].name + " Campground</strong>")
                .on("click", () => {
                    console.log(this);
                    this.setQuickRefPoint(id);
                });
        }
        //setIcon(

        this.setState({
            mapRef: map,
            mapLayer: mapLayer,
            mapMarkers: markers
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            JSON.stringify(prevProps.quickReference) !==
            JSON.stringify(this.props.quickReference)
        ) {
            if (prevState.focusedRefPoint === "a") {
                this.setState(prevState => ({
                    focusedRefPoint: "b"
                }));
            } else if (prevState.focusedRefPoint === "b") {
                this.setState(prevState => ({
                    focusedRefPoint: null
                }));
            }

            for (const id in this.state.mapMarkers) {
                switch (id) {
                    case this.props.quickReference.pointA:
                        this.state.mapMarkers[id].setIcon(pointAIcon);
                        break;
                    case this.props.quickReference.pointB:
                        this.state.mapMarkers[id].setIcon(pointBIcon);
                        break;
                    default:
                        this.state.mapMarkers[id].setIcon(defaultIcon);
                        break;
                }
            }
        }
    }

    setQuickRefPoint(id) {
        const { focusedRefPoint } = this.state;
        switch (focusedRefPoint) {
            case "a":
                this.props.addPointA(id);
                break;
            case "b":
                this.props.addPointB(id);
                break;
            default:
                break;
        }
    }

    setFocusedPoint(id) {
        this.setState({ focusedRefPoint: id });
    }

    toggleMapType(type) {
        const mapLayer = window.L.esri
            .basemapLayer(type)
            .addTo(this.state.mapRef);
        this.state.mapLayer.remove();
        this.setState({ mapLayer: mapLayer });
    }

    render() {
        const { camps, quickReference } = this.props;
        return (
            <div className="Map">
                <QuickReference
                    camps={camps}
                    setFocusedPoint={this.setFocusedPoint}
                    focusedRefPoint={this.state.focusedRefPoint}
                    quickReference={quickReference}
                />
                <div id="map" />
                <MapTypeMenu
                    toggleMapType={this.toggleMapType}
                    mapTypes={this.state.mapTypes}
                />
            </div>
        );
    }
}

export default Map;
