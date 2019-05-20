import React from 'react';
import { PageLayoutPropsI } from '../types';

const settings = {
    language: 'en',
    interfaceColor: 'light'
};

export const PageLayout = ({ children, js = [] }: PageLayoutPropsI) => (
    <html lang={settings.language}>
        <head>
            <title>Docler Chat</title>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="/client/styles/app.css" type="text/css"></link>
        </head>
        <body className={settings.interfaceColor}>{children}</body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        {
            js.map((src, i) => <script key={i} src={src}></script>)
        }
    </html>
);
