export default interface HotelI {
    id: number;
    createdAt: Date;
    name: string;
    image: string;
    latitude: string;
    longitude: string;
    available: boolean;
    positiveReviews: number;
    negativeReviews: number;
    description: string;
}