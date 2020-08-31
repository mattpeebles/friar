import { SELECTED_STOCK, StockAction } from "./types";

const initialState: StockReducerState = {
    SelectedStock: ""
};

export default function (state = initialState, action: StockAction)
{
    switch (action.type)
    {
        case SELECTED_STOCK: {
            const { symbol } = action.payload;


            let updatedState: StockReducerState = {
                SelectedStock: symbol
            }

            return updatedState;
        }

        default:
            return state;
    }
}