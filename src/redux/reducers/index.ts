import { combineReducers } from "redux";
import earnings from "./earnings/earnings";
import dates from "./dates/dates";

export default combineReducers<RootState>({ earnings, dates });