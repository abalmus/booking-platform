import React, { Fragment } from 'react';
import { HotelsPreviewProps } from '../types/index';
import { PageLayout } from '../layouts/PageLayout';
import { useTranslation } from 'react-i18next';
import HotelPreview from './HotelPreview';

const HotelsPage = ({ hotels = [] }: HotelsPreviewProps ) => {
    const { t } = useTranslation();

    return (
        <PageLayout js={['/client/clientApp.js']}>
            <Fragment>
                {
                    hotels.length && hotels.map(({
                        name
                    }, key) => (
                        <p key={key}>{name}</p>
                    ))
                }
                <HotelPreview hotels={hotels} />
            </Fragment>
        </PageLayout>
    );
}

export default HotelsPage;
