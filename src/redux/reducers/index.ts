import { combineReducers } from "redux";
import earnings from "./earnings";
import dates from "./dates";

export default combineReducers<RootState>({ earnings, dates });
