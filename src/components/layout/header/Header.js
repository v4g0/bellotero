import React from 'react';
import HeaderItem from './HeaderItem';
import { connect } from 'react-redux';

class Header extends React.PureComponent {

    render() {
        const { getHeader, location } = this.props
        return (
            getHeader.menu != undefined
                ?
                <HeaderItem items={getHeader.menu.items} location={location} />
                :
                null
        )
    }
}

function mapStateToProps(state) {
    return {
        getHeader: state.getHeader,
        location: state.router.location,
    };
}

export default connect(mapStateToProps)(Header)

