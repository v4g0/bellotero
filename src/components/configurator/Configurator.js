import React from 'react';
import ConfiguratorItem from './ConfiguratorItem';
import { connect } from 'react-redux';
// import testimonialActions from '../../redux/actions/TestimonialActions';
import $ from "jquery"

class Configurator extends React.PureComponent {
    state = {
        // currentSld: 1
    }

    // componentDidMount() {
    //     const { dispatch } = this.props
    //     dispatch(testimonialActions.getTestimonial())
    // }

    render() {
        const { slider } = this.props.getTestimonial
        const { currentSld } = this.state
        return (
            slider != undefined
                ?
                <ConfiguratorItem />
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

export default connect(mapStateToProps)(Configurator)