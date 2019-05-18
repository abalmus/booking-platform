import { Socket, OnEvent, ISocket, Autowired } from 'odi';
import { HotelI } from '../types/index';
import HotelService from '../services/hotel';

@Socket('app')
export default class HotelSocket extends ISocket {
    @Autowired()
    hotelService: HotelService;

    @OnEvent('hotel:booked')
    onmessage(hotel: HotelI) {

    }
}