import { configuratorConstants } from '../constants/ConfiguratorConstants';

export function getContent(state = { isSubmitting: false }, action) {
    let newState = Object.assign({}, state, {})

    switch (action.type) {
        case configuratorConstants.GET_CONFIGURATOR_REQUEST:
            newState["isSubmitting"] = true
            return newState
        case configuratorConstants.GET_CONFIGURATOR_SUCCESS:
            newState["isSubmitting"] = false
            newState = { ...action.response }
            return newState
        case configuratorConstants.GET_CONFIGURATOR_FAILURE:
            newState["isSubmitting"] = false
            return newState
        default:
            return newState
    }
}
