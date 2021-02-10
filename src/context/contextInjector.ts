import React from 'react'
import { AnyAction, Reducer, Context } from '../Types/stateManagement';

export const ProviderCreator = <State, Action extends AnyAction>(
    defaultState: State,
    reducer: Reducer<State, Action>,
    context: React.Context<Context<State, Action>>
) => class ProviderComponent extends React.Component<any, State>{
        static state: State;
        state = defaultState;
        dispatch = (action: Action) => {
            this.setState(
                (prevState) => {
                    return reducer(prevState, action)
                }
            )
        }
        render() {
            const { Provider } = context
            return React.createElement(Provider, {
                children: this.props.children,
                value: {
                    state: this.state,
                    dispatch: this.dispatch
                }
            })
        }
    }