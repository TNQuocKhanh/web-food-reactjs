// import { createStore } from "redux";
// import rootReducers from "./reducers";

// const store = createStore(rootReducers);

// export default store;

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import ShopApp from "../redux/reducers";
const store = createStore(ShopApp, applyMiddleware(thunkMiddleware));
export default store;
