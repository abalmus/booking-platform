import { Service } from 'odi';
import { HotelI } from '../types/index';
import fetch from 'node-fetch';

@Service()
export default class HotelService {
    private fetchHotelsUrl = 'http://5c505db9ee97f600140480dd.mockapi.io/hotels';
    private store: HotelI[] = [];

    public async getAll() {
        try {
            const response = await fetch(this.fetchHotelsUrl);
            this.store = await response.json();

            return this.store;
        } catch (error) {
            console.log(error);
        }

        return [];
    }
}
