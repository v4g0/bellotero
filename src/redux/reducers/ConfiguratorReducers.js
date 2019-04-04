import { configuratorConstants } from '../constants/ConfiguratorConstants';

export function getContent(state = { isSubmitting: false }, action) {
    let newState = Object.assign({}, state, {})

    switch (action.type) {
        case configuratorConstants.GET_HEADER_REQUEST:
            newState["isSubmitting"] = true
            return newState
        case configuratorConstants.GET_HEADER_SUCCESS:
            newState["isSubmitting"] = false
            newState = { ...action.response }
            return newState
        case configuratorConstants.UPLOAD_FAILURE:
            newState["isSubmitting"] = false
            return newState
        default:
            return newState
    }
}
