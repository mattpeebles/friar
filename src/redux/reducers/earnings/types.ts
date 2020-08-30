export const ADD_EARNINGS_BY_DATE = "ADD_EARNINGS_BY_DATE";


export interface AddEarningsActions
{
    type: typeof ADD_EARNINGS_BY_DATE
    payload: IEarningsActionsPayload

}

export interface IEarningsActionsPayload
{ date: Date, content: IEarningsCalendarApiResponse }

export type EarningsActions = AddEarningsActions;
