import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/index";
import  { asyncMiddleware } from "../middleware/async";
const store = createStore(
    rootReducer,
    applyMiddleware(asyncMiddleware)
);

export default store;