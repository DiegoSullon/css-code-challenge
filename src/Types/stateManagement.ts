export interface Action {
    type: string
}
export interface AnyAction extends Action {
    [extraProps: string]: any
}

export type Reducer<State = any, A extends Action = AnyAction> = (
    state: State,
    actions: A
) => State
export interface Context<State=any, A extends Action = AnyAction> {
    state: State;
    dispatch: (action: A) => void
}