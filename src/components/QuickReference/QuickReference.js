import React, { Component } from "react";
import { pointAIconPath, pointBIconPath } from "../../data/icons";
import "./QuickReference.css";

class QuickReference extends Component {
    constructor(props) {
        super(props);

        this.state = {
            distance: "..."
        };

        this.setState = this.setState.bind(this);
        this.calculateDistance = this.calculateDistance.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const { quickReference, camps } = this.props;
        if (
            JSON.stringify(prevProps.quickReference) !==
            JSON.stringify(quickReference)
        ) {
            console.log("updating...");
            if (quickReference.pointA && quickReference.pointB) {
                this.setState({
                    distance: this.calculateDistance(
                        quickReference.pointA,
                        quickReference.pointB
                    )
                });
            }
        }
    }

    calculateDistance(pointA, pointB) {
        const { camps } = this.props;
        return camps[pointA].distance[pointB]
            ? camps[pointA].distance[pointB]
            : camps[pointB].distance[pointA];
    }

    render() {
        const { quickReference, camps } = this.props;
        if (!quickReference.pointA && !quickReference.pointB) {
            return null;
        } else {
            return (
                <div className="QuickReference">
                    <div className="QuickReference--points">
                        <QuickReferencePoint
                            setFocusedPoint={this.props.setFocusedPoint}
                            refPointId={"a"}
                            focused={this.props.focusedRefPoint}
                            referenceLocation={camps[quickReference.pointA]}
                            altText={"Choose starting point"}
                            markerIcon={pointAIconPath}
                        />
                        <QuickReferencePoint
                            setFocusedPoint={this.props.setFocusedPoint}
                            refPointId={"b"}
                            focused={this.props.focusedRefPoint}
                            referenceLocation={camps[quickReference.pointB]}
                            altText={"Choose destination"}
                            markerIcon={pointBIconPath}
                        />
                    </div>
                    <div className="QuickReference--distance">
                        {this.state.distance}
                        <div
                            className={
                                "QuickReference--distance-unit" +
                                (this.state.distance > 0 ? " show" : "")
                            }
                        >
                            MILES
                        </div>
                    </div>
                </div>
            );
        }
    }
}

function QuickReferencePoint(props) {
    return (
        <div
            className={
                "QuickReferencePoint" +
                (props.focused === props.refPointId ? " focused" : "")
            }
            onClick={() => {
                props.setFocusedPoint(props.refPointId);
            }}
        >
            <span className="QuickReferencePoint--icon">
                <img src={props.markerIcon} />
            </span>
            {props.referenceLocation
                ? <strong>
                      {props.referenceLocation.name + " Campground"}
                  </strong>
                : props.altText}
        </div>
    );
}

export default QuickReference;
