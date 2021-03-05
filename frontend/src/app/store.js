import { createStore } from "redux";
import showReducer from "../reducers/showReducer";

function configureStore(state = { showing: true }) {
    return createStore(showReducer, state);
}

export default configureStore;