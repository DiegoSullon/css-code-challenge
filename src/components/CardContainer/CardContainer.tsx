import React, { useEffect } from 'react'
import { getImagesSuccess } from '../../context/imgur/imgurActions';
import { useImgur } from '../../context/imgur/ImgurHooks'

export const CardContainer = () => {
    const [state, getImages] = useImgur();
    useEffect(
        () => {
            getImages()
        }, []
    );
    return (
        <div>
            <ul>
                {
                    state.data && state.data.map(item => (
                        <li key={item.id}>
                            {item.title}
                        </li>
                    ))
                }
            </ul>
            {state.fetch && <h1>Loading.....</h1>}
        </div>
    )
}