import { ADD_EARNINGS_BY_DATE, EarningsActions } from "./types";

const initialState: EarningsReducerState = {
    EarningsByDate: {}
};

export default function (state = initialState, action: EarningsActions)
{
    switch (action.type)
    {
        case ADD_EARNINGS_BY_DATE: {
            const { date, content } = action.payload;


            let updatedState: EarningsReducerState = {
                EarningsByDate: {
                    ...state.EarningsByDate,
                    [date.toISOString()]: {
                        Earnings: content,
                        EarningsCount: content?.earningsCalendar?.length ?? 0
                    }
                }
            }

            return updatedState;
        }

        default:
            return state;
    }
}