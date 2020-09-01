import { SELECTED_STOCK, ADD_COMPANY_INFO, StockAction } from "./types";

const initialState: StockReducerState = {
    SelectedStock: "",
    CompanyMap: {}
};

export default function (state = initialState, action: StockAction)
{
    switch (action.type)
    {
        case SELECTED_STOCK: {
            const { symbol } = action.payload;

            let updatedState: StockReducerState = {
                ...state,
                SelectedStock: symbol
            }

            return updatedState;
        }

        case ADD_COMPANY_INFO: {
            const { symbol, info } = action.payload;

            let updatedState: StockReducerState = {
                ...state, 
                CompanyMap: {
                    ...state.CompanyMap,
                    [symbol]: info
                }
            }

            return updatedState;
        }

        default:
            return state;
    }
}