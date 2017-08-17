import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { reducer as campgrounds } from "./campgrounds";

export const reducers = combineReducers({ campgrounds });
export const epics = combineEpics();
