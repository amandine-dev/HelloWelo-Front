export class BikerideModel {
    id?: number;
    title: string = '';
    date: Date = new Date();
    time: Date = new Date();
    numberKm: number;
    description: string = '';
    meetingPoint: string = '';
    itinerary: string =''
    numberMaxParticipants: number;
    numberParticipants: number;
    rideTypeId: number;
    rideLevelId: number;
    rideStatusId: number;
    cityId: string = '';
    createdAt: Date = new Date();
    updatedAt: Date = new Date();
}