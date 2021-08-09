import changingName from "./nameChanger";
import { combineReducers } from "redux";

const rootreducers=combineReducers({
    changingName:changingName
});

export default rootreducers;