import { headerConstants } from '../constants/HeaderConstants';

export function getHeader(state = { isSubmitting: false }, action) {
    let newState = Object.assign({}, state, {})

    switch (action.type) {
        case headerConstants.GET_HEADER_REQUEST:
            newState["isSubmitting"] = true
            return newState
        case headerConstants.GET_HEADER_SUCCESS:
            newState["isSubmitting"] = false
            newState = { ...action.response }
            return newState
        case headerConstants.UPLOAD_FAILURE:
            newState["isSubmitting"] = false
            return newState
        default:
            return newState
    }
}
