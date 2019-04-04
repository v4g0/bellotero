import React from 'react';
import TestimonialItem from './TestimonialItem';
import { connect } from 'react-redux';
import testimonialActions from '../../redux/actions/TestimonialActions';
import $ from "jquery"

class Testimonial extends React.PureComponent {
    state = {
        currentSld: 1
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(testimonialActions.getTestimonial())
    }

    onSlideChange() {
        
        var timeOut = setTimeout(()=>{
            this.setState({ currentSld: $('.carousel-item.active').index() + 1 })
            clearTimeout(timeOut)
        },900)
        
    }

    render() {
        const { slider } = this.props.getTestimonial
        const { currentSld } = this.state
        return (
            slider != undefined
                ?
                <TestimonialItem slider={slider} currentSld={currentSld} onSlideChange={() => this.onSlideChange()} />
                :
                null
        )
    }
}

function mapStateToProps(state) {
    const getTestimonial = state.getTestimonial;
    return {
        getTestimonial
    };
}

export default connect(mapStateToProps)(Testimonial)