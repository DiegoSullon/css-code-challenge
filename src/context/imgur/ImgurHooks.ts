import React, { useContext } from 'react'
import { getImagesRequest, getImagesSuccess } from './imgurActions'
import { ImgurContext, imgurContext, ImgurState } from './imgurContext'
import {getImages} from './ImgurServices'

export const useImgur = ():[ImgurState,()=>void] => {
    const { state, dispatch } = useContext<ImgurContext>(imgurContext)
    return [
        state,
        () => {
            dispatch(getImagesRequest())
            getImages().then(response => {
                dispatch(getImagesSuccess(response.data))
            })
        }
    ]
}