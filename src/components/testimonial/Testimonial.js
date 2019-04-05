import React from 'react';
import TestimonialItem from './TestimonialItem';
import { connect } from 'react-redux';
import testimonialActions from '../../redux/actions/TestimonialActions';
import $ from "jquery"
import MoonLoader from 'react-spinners/ClipLoader';

class Testimonial extends React.PureComponent {
    state = {
        currentSld: 1
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(testimonialActions.getTestimonial())
    }

    onSlideChange() {

        var timeOut = setTimeout(() => {
            this.setState({ currentSld: $('.carousel-item.active').index() + 1 })
            clearTimeout(timeOut)
        }, 900)

    }

    render() {
        const { slider } = this.props.getTestimonial
        const { currentSld } = this.state
        return (
            slider != undefined
                ?
                <TestimonialItem slider={slider} currentSld={currentSld} onSlideChange={() => this.onSlideChange()} />
                :
                <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                    <MoonLoader sizeUnit={"px"} size={60} color={'#071eb3'} />
                </div>
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