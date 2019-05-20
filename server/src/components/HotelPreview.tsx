import React, { Fragment } from 'react';
import { HotelsPreviewProps } from '../types';

const HotelPreview = ({ hotels = [] }: HotelsPreviewProps) => (
        <div className="row">
            {
                hotels.length && hotels.map(({
                    name,
                    description,
                    image,
                    available,
                    positiveReviews,
                    negativeReviews
                }, key) => (
                    <div key={key} className="col s6 l4">
                        <div className="card">
                            <div className="card-image">
                                <img src={image} />
                                <span className="card-title">{name}</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light red pulse">
                                    <i className="material-icons">favorite</i>
                                </a>
                            </div>
                            <div className="card-content">
                                <p>{description} <a href="#">Learn more ></a></p>
                            </div>
                            <div className="card-action">
                                {
                                    available && <a className="waves-effect waves-light btn">
                                        <i className="material-icons left">add_circle</i> Book
                                    </a>
                                }
                                {
                                    !available && <a className="btn-flat disabled">Not Available</a>
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
);

export default HotelPreview;
