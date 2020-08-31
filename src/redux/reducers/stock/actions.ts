import { SELECTED_STOCK, StockAction} from "./types";


export const selectStockSymbol = (symbol: string): StockAction => ({
    type: SELECTED_STOCK,
    payload: {
        symbol
    }
})