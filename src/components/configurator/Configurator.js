import React from 'react';
import ConfiguratorItem from './ConfiguratorItem';
import { connect } from 'react-redux';
import configuratorActions from '../../redux/actions/ConfiguratorActions';

class Configurator extends React.PureComponent {
    state = {
        mtText: 0,
        mtSlider: 0,
        ftText: 0,
        ftSlider: 0,
        eCostFoodSvng: 0,
        eYearSvng: 0
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(configuratorActions.getContent())
    }

    onHandleTextChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onHandleMtSliderChange = (e, value) => {
        console.log(value)
        const { ftSlider } = this.state
        const eCostFoodSvng = value * .3
        this.setState({ mtSlider: value, eCostFoodSvng: eCostFoodSvng, eYearSvng: ftSlider * 1337 + eCostFoodSvng });
    };

    onHandleFtSliderChange = (e, value) => {
        // this.setState({ ftSlider: value });
        const { eCostFoodSvng } = this.state
        this.setState({ ftSlider: value, eYearSvng: value * 1337 + eCostFoodSvng});
    };

    render() {
        const { calculator } = this.props.getContent
        return (
            calculator != undefined
                ?
                <ConfiguratorItem
                    {...this.state} content={calculator}
                    handleTextChange={this.onHandleTextChange}

                    handleMtSliderChange={this.onHandleMtSliderChange}
                    handleFtSliderChange={this.onHandleFtSliderChange}
                />
                :
                null
        )
    }
}

function mapStateToProps(state) {
    const getContent = state.getContent;
    return {
        getContent
    };
}

export default connect(mapStateToProps)(Configurator)