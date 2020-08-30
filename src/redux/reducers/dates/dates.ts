import { DateActions, SELECT_DATE,  } from "./types";

const initialState: DateReducerState = {
    selectedDate: undefined
};

export default function (state = initialState, action: DateActions)
{
    switch (action.type)
    {
        case SELECT_DATE: {
            const { date } = action.payload;

            let updatedState: DateReducerState = {
                selectedDate: date
            }

            return updatedState;
        }

        default:
            return state;
    }
}