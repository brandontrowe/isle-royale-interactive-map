import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { reducer as campgrounds } from "./campgrounds";
import { reducer as quickReference } from "./quickReference";

export const reducers = combineReducers({ campgrounds, quickReference });
export const epics = combineEpics();
