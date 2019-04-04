import React from 'react';
// import './Header.scss';
// import bellotero from '../../../assets/img/bellotero.svg'
import Testimonial from '../testimonial/Testimonial'
import Configurator from '../configurator/Configurator'

export default function Base(props) {
    return (
        <div className="base d-flex align-items-center justify-content-center bg-blue-zodiac" >
            {/* <Testimonial /> */}
            <Configurator/>
        </div>
    )
}
