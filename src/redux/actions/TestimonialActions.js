
import { testimonialConstants } from '../constants/TestimonialConstants';
import testimonialServices from '../services/TestimonialServices';

export default {
    getTestimonial
};

function getTestimonial() {
    return dispatch => {
        dispatch(request());

        testimonialServices.getTestimonial()
            .then(
                response => {
                    dispatch(success(response));                    
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request() { return { type: testimonialConstants.GET_TESTIMONIAL_REQUEST } }
    function success(response) { return { type: testimonialConstants.GET_TESTIMONIAL_SUCCESS,response } }
    function failure(error) { return { type: testimonialConstants.GET_TESTIMONIAL_FAILURE, error } }
}
