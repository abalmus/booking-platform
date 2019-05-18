import React, { Fragment } from 'react';
import { Controller, IController, Get, Autowired } from 'odi';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';
import HotelService from '../services/hotel';
import { HotelI } from '../types';
import { HotelsPage } from '../components';

@Controller()
export class IndexController extends IController {
    @Autowired()
    private hotelsService: HotelService
    private hotels: HotelI[];

    @Get async index() {
        this.hotels = await this.hotelsService.getAll();
        i18n.changeLanguage('en');

        return (
            <I18nextProvider i18n={i18n}>
                <HotelsPage hotels={this.hotels} />
            </I18nextProvider>
        );
    }
}
