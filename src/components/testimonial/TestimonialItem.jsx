import React from 'react';
import Fade from 'react-reveal/Fade';
import './Testimonial.scss';

export default function TestimonialItem(props) {
    return (
        <Fade top>
            <div className="testimonial w-100">
                <div className="d-flex">
                    <span className="bg-dark-blue text-white h1 p-2 text-center"> <b>{props.slider.title}</b></span>
                </div>

                <div id="slider" className="carousel slide mt-4 " data-ride="carousel" data-interval="false">
                    <div className="carousel-inner bg-white p-4">
                        {
                            props.slider.reviews.map((elm, index) => {
                                return (
                                    <div className={"carousel-item " + (index == 0 ? "active" : "")} data-interval="false" key={"sl-" + index}>
                                        <div className="row py-3">
                                            <div className="col-5 d-flex flex-column align-items-start">
                                                <span className="h2"><b>{elm.name}</b></span>
                                                <span className="small">{elm.position}</span>
                                            </div>
                                            <div className="col-7 text-left">
                                                <span className="h4"><b>"{elm.comment}"</b></span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="controls d-flex">
                        <span className="bg-dark-blue p-3 text-white counter h4">{props.currentSld}/{props.slider.reviews.length}</span>
                        <a className="bg-dark-blue p-3 text-white control" href="#slider" role="button" data-slide="prev" onClick={props.onSlideChange}>
                            <span>{"←"} </span>
                        </a>
                        <a className="bg-dark-blue p-3 text-white control" href="#slider" role="button" data-slide="next" onClick={props.onSlideChange}>
                            <span>{"→"} </span>
                        </a>
                    </div>

                </div>
                <div></div>
            </div>
        </Fade>
    )
}
