import React from 'react';
import HeaderItem from './HeaderItem';
import { connect } from 'react-redux';
import headerActions from '../../../redux/actions/HeaderActions';

class Header extends React.PureComponent {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(headerActions.getHeader())
    }

    render() {
        const { menu } = this.props.getHeader
        return (
            menu != undefined
                ?
                <HeaderItem items={menu.items} />
                :
                null
        )
    }
}

function mapStateToProps(state) {
    const getHeader = state.getHeader;
    return {
        getHeader
    };
}

export default connect(mapStateToProps)(Header)