import { SELECT_DATE } from "../actionTypes";

const initialState: DateReducerState = {
    selectedDate: undefined
};

export default function (state = initialState, action: { type: any; payload: { id: any; content: any; }; })
{
    switch (action.type)
    {
        case SELECT_DATE: {
            const { content } = action.payload;
            
            let updatedState: DateReducerState = {
                selectedDate: content
            }

            return updatedState;
        }

        default:
            return state;
    }
}