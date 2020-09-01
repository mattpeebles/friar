import
{
    SELECTED_STOCK,
    ADD_COMPANY_INFO,
    StockAction
} from "./types";


export const selectStockSymbol = (symbol: string): StockAction => ({
    type: SELECTED_STOCK,
    payload: {
        symbol
    }
})

export const addCompanyInfo = (symbol: string, info: ICompanyInfo): StockAction => ({
    type: ADD_COMPANY_INFO,
    payload: {
        info,
        symbol
    }
})