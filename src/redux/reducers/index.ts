import { combineReducers } from "redux";
import earnings from "./earnings/earnings";
import dates from "./dates/dates";
import stocks from "./stock/stocks";
import prices from "./price/prices";

export default combineReducers<RootState>({ earnings, dates, stocks, prices });