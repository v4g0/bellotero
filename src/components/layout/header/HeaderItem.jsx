import React from 'react';
import './Header.scss';
import bellotero from '../../../assets/img/bellotero.svg'
import { Link } from 'react-router-dom'

export default function HeaderItem(props) {
    console.log(props)

    function currentItem() {
        const { pathname } = props.location
        const paths = pathname.split("/")

        return paths[1]
    }

    const current = currentItem()

    return (
        <div className="row justify-content-center bg-white">
            <nav className="col-9 navbar navbar-expand-lg navbar-light p-0">

                <a className="navbar-brand" href="#">
                    <img src={bellotero} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse h-100" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto h-100 d-flex">
                        {
                            props.items.map((el, index) => {
                                return (
                                    <li className={"nav-item h-100 text-center" + (el.route == current ? " border-dark-blue sel-border" : "")} key={"nav-item" + index}>
                                        <Link className="nav-link text-dark-blue p-3" to={{ pathname: "/" +  el.route }} >{el.text}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        </div>

    )

}
