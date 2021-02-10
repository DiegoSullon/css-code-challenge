import { AnyAction } from '../../Types/stateManagement';
import { GET_IMAGES, GET_IMAGES_SUCCESS } from './imgurActions';
import { ImgurAction, ImgurState, INITIAL_STATE } from './imgurContext';

export function imgurReducer(state = INITIAL_STATE, action: ImgurAction): ImgurState {
    switch (action.type) {
        case GET_IMAGES:
            return {
                ...state,
                fetch: true
            };
            break;
        case GET_IMAGES_SUCCESS:
            return {
                ...state,
                fetch: false,
                data: action.data
            };
            break;

        default:
            return state;
            break;
    }
}