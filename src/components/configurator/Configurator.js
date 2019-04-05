import React from 'react';
import ConfiguratorItem from './ConfiguratorItem';
import { connect } from 'react-redux';
import configuratorActions from '../../redux/actions/ConfiguratorActions';
import MoonLoader from 'react-spinners/ClipLoader';

class Configurator extends React.PureComponent {
    state = {
        monthly: 10,
        fullTime: 1,
        eCostFoodSvng: 0,
        eYearSvng: 0
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(configuratorActions.getContent())
        this.setState((prevState) => ({
            eCostFoodSvng: prevState.monthly * .3,
            eYearSvng: prevState.fullTime * 1337 + prevState.monthly * .3
        }));
    }

    onHandleTextChange = e => {
        switch (e.target.name) {
            case "monthly":
                const monthly = parseInt(e.target.value)
                const eCostFoodSvng = monthly * .3
                this.setState({ monthly: monthly, eCostFoodSvng: eCostFoodSvng, eYearSvng: this.state.fullTime * 1337 + eCostFoodSvng });
                break
            case "fullTime":
                const fullTime = parseInt(e.target.value)
                this.setState({ fullTime: fullTime, eYearSvng: fullTime * 1337 + this.state.eCostFoodSvng });
                break
            default:
                this.setState({ [e.target.name]: parseInt(e.target.value) });
                break
        }
    };

    onHandleMtSliderChange = (e, value) => {
        const { fullTime } = this.state
        const eCostFoodSvng = value * .3
        this.setState({ monthly: value, eCostFoodSvng: eCostFoodSvng, eYearSvng: fullTime * 1337 + eCostFoodSvng });
    };

    onHandleFtSliderChange = (e, value) => {
        const { eCostFoodSvng } = this.state
        this.setState({ fullTime: value, eYearSvng: value * 1337 + eCostFoodSvng });
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
                <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                    <MoonLoader sizeUnit={"px"} size={60} color={'#071eb3'} />
                </div>
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