import { combineReducers } from 'redux';
import { getHeader } from './HeaderReducers';
import { getTestimonial } from './TestimonialReducers';
import { getContent } from './ConfiguratorReducers';
import { connectRouter } from 'connected-react-router'
import { history } from '../../helpers/history';

const rootReducer = combineReducers({
    router: connectRouter(history), // new root reducer with router state
    getHeader,
    getTestimonial,
    getContent
})

export default rootReducer;