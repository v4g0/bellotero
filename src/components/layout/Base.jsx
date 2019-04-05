import React from 'react';
// import './Header.scss';
// import bellotero from '../../../assets/img/bellotero.svg'
import Testimonial from '../testimonial/Testimonial'
import Configurator from '../configurator/Configurator'

export default function Base(props) {
    return (
        <div className="row justify-content-center bg-blue-zodiac base">
            <div className="col-11 col-md-10 col-xl-9  d-flex justify-content-center " >
                {props.children}
            </div>
        </div>

    )
}
