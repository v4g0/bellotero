
import { headerConstants } from '../constants/HeaderConstants';
import headerServices from '../services/HeaderServices';

export default {
    getHeader
};

function getHeader() {
    return dispatch => {
        dispatch(request());

        headerServices.getHeader()
            .then(
                response => {
                    dispatch(success(response));                    
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request() { return { type: headerConstants.GET_HEADER_REQUEST } }
    function success(response) { return { type: headerConstants.GET_HEADER_SUCCESS,response } }
    function failure(error) { return { type: headerConstants.GET_HEADER_FAILURE, error } }
}
