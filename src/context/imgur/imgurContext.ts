import React from 'react'
import { ImgurData } from '../../Types/imgur'
import { Context } from '../../Types/stateManagement'
import { ProviderCreator } from '../contextInjector'
import { imgurReducer } from './imgurReducer'

export interface ImgurState {
    fetch: boolean;
    data?: ImgurData[];
}
export type ImgurContext = Context<ImgurState>
export type ImgurAction ={
    type: string;
    data?: ImgurData[];
}
export const INITIAL_STATE = {
    fetch: false,
};

export const imgurContext = React.createContext<ImgurContext>({
    state: INITIAL_STATE,
    dispatch: (action) => { }
})

export const ImgurProvider = ProviderCreator<ImgurState, ImgurAction>(INITIAL_STATE,imgurReducer,imgurContext)