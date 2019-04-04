
import { configuratorConstants } from '../constants/ConfiguratorConstants';
import configuratorServices from '../services/ConfiguratorServices';

export default {
    getContent
};

function getContent() {
    return dispatch => {
        dispatch(request());

        configuratorServices.getContent()
            .then(
                response => {
                    dispatch(success(response));                    
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request() { return { type: configuratorConstants.GET_CONFIGURATOR_REQUEST } }
    function success(response) { return { type: configuratorConstants.GET_CONFIGURATOR_SUCCESS,response } }
    function failure(error) { return { type: configuratorConstants.GET_CONFIGURATOR_FAILURE, error } }
}
