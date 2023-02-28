import {applyMiddleware, compose, createStore} from "redux";
import reducers from "./reducers";
import asyncMiddleware from "@store/middlewares/asyncMiddleware.js";


const middlewares = [
    asyncMiddleware(),
];

function configureStore() {
    const store = createStore(
        reducers,
        compose(applyMiddleware(...middlewares))
    );
    return store;
}

const store = configureStore();

export default store;

