import { combineReducers } from 'redux';
import { getHeader } from './HeaderReducers';
import { getTestimonial } from './TestimonialReducers';
import { getContent } from './ConfiguratorReducers';

const rootReducer = combineReducers({
    getHeader,
    getTestimonial,
    getContent
})

export default rootReducer;
