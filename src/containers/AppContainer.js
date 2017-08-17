import React from "react";
import { connect } from "react-redux";
import App from "../components/App/App";

const mapStateToProps = state => {
    return { campgrounds: state.campgrounds };
};
//
// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

const AppContainer = connect(mapStateToProps)(function AppContainer(props) {
    return (
        <div className="AppContainer">
            <App {...props} />
        </div>
    );
});

export default AppContainer;
