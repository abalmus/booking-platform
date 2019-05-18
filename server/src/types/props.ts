import {
    HotelI,
} from '../types';

export interface HotelsPreviewProps {
    hotels: HotelI[];
}

export interface PageLayoutPropsI {
    children?: any;
    js?: string[];
}

// export interface LanguageSelectorPropsI {
//     title: string;
//     options: LangOptionI[];
//     defaultValue: string;
// }