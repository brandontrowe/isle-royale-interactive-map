import React from "react";
import { connect } from "react-redux";
import App from "../components/App/App";
import { addPointA, addPointB } from "../ducks/quickReference";

const mapStateToProps = state => {
    return {
        campgrounds: state.campgrounds,
        quickReference: state.quickReference
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addPointA: id => {
            dispatch(addPointA(id));
        },
        addPointB: id => {
            dispatch(addPointB(id));
        }
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(function AppContainer(props) {
    return (
        <div className="AppContainer">
            <App {...props} />
        </div>
    );
});

export default AppContainer;
