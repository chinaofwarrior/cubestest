import {LOGIN, LOGOUT} from '../action/types'

const initialAuthState = {isLoggedIn: false}

function auth(state = initialAuthState, action: { type: any; }) {
    switch (action.type) {
        case LOGIN:
            return { ...state, isLoggedIn: true}
        case LOGOUT:
            return { ...state, isLoggedIn: false}
        default:
            return state;
    }
}

export default auth;