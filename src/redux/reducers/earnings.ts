import { ADD_EARNINGS_BY_DATE } from "../actionTypes";

const initialState: EarningsReducerState = {
    EarningsByDate: {}
};

export default function (state = initialState, action: { type: any; payload: any; })
{
    switch (action.type)
    {
        case ADD_EARNINGS_BY_DATE: {
            const { date, content } : { date: Date, content: any}= action.payload;


            let updatedState: EarningsReducerState = {
                EarningsByDate: {
                    ...state.EarningsByDate,
                    [date.toISOString()]: {
                        Earnings: content as IEarningsCalendarApiResponse,
                        EarningsCount: (content as IEarningsCalendarApiResponse)?.earningsCalendar?.length ?? 0
                    }
                }
            }

            return updatedState;
        }

        default:
            return state;
    }
}