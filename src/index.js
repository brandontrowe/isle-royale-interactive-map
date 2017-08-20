import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducers } from "./ducks";
// import { createEpicMiddleware } from "redux-observable";
import AppContainer from "./containers/AppContainer";
import { addCampground } from "./ducks/campgrounds";
import campgroundsData from "./data/camp-distances.json";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

// const epicMiddleware = createEpicMiddleware(epics);
const store = createStore(reducers); //, applyMiddleware(epicMiddleware));

for (const id in campgroundsData.camps) {
    store.dispatch(
        addCampground(
            id,
            campgroundsData.camps[id],
            {
                lat: campgroundsData.locations[id].lat,
                long: campgroundsData.locations[id].long
            },
            campgroundsData.distance[id]
        )
    );
}

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
