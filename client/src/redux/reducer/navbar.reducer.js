import { TOGGLE_HAMGURGER } from '../action-types';

const initialState = {
    isOpen: false,
};

function navbarReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_HAMGURGER:
            return {
                ...state,
                isOpen: action.payload
            }


        default: return state;
    }
}

export default navbarReducer;
