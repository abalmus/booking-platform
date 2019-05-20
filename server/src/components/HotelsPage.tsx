import React, { Fragment } from 'react';
import { HotelsPreviewProps } from '../types/index';
import { PageLayout } from '../layouts/PageLayout';
import { useTranslation } from 'react-i18next';
import HotelPreview from './HotelPreview';

const HotelsPage = ({ hotels = [] }: HotelsPreviewProps) => {
    const { t } = useTranslation();

    return (
        <PageLayout js={['/client/clientApp.js']}>
            <nav className="white" role="navigation">
                <div className="nav-wrapper container">
                    <a id="logo-container" href="#" className="brand-logo">TripActions</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#">Navbar Link</a></li>
                        <li><a className="modal-trigger" href="#modal1">Login</a></li>
                    </ul>

                    <ul id="nav-mobile" className="sidenav">
                        <li><a href="#">Navbar Link</a></li>
                        <li><a className="modal-trigger" href="#modal1">Login</a></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
            </nav>

            <HotelPreview hotels={hotels} />

            <div id="modal1" className="modal">
                <div className="container">
                    <form className="col s12">
                        <div className="modal-content">
                            <div className="row">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="email" type="email" className="validate" />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="password" type="password" className="validate" />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a className="waves-effect waves-light btn">Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </PageLayout>
    );
}

export default HotelsPage;
