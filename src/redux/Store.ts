import { createStore } from "redux";
import { userReducer } from "./Reducers";

export const Store = createStore(userReducer);
