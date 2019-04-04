import { testimonialConstants } from '../constants/TestimonialConstants';

export function getTestimonial(state = { isSubmitting: false }, action) {
    let newState = Object.assign({}, state, {})

    switch (action.type) {
        case testimonialConstants.GET_TESTIMONIAL_REQUEST:
            newState["isSubmitting"] = true
            return newState
        case testimonialConstants.GET_TESTIMONIAL_SUCCESS:
            newState["isSubmitting"] = false
            newState = { ...action.response }
            return newState
        case testimonialConstants.GET_TESTIMONIAL_FAILURE:
            newState["isSubmitting"] = false
            return newState
        default:
            return newState
    }
}
