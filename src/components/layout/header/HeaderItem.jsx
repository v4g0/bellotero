import React from 'react';
import './Header.scss';
import bellotero from '../../../assets/img/bellotero.svg'

export default function HeaderItem(props) {
    console.log(props)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-0">
            <a className="navbar-brand" href="#">
                <img src={bellotero} alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse h-100" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto h-100 d-flex">
                    {
                        props.items.map((el,index) => {
                            return (
                                <li className="nav-item h-100 border-dark-blue text-center" key={"nav-item" + index}>
                                    <a className="nav-link text-dark-blue p-3" href="#">{el.text}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}
