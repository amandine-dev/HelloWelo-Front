export class BikerideModel {
    id?: number;
    title: string = '';
    date: Date = new Date();
    time: Date = new Date();
    numberkm: number;
    description: string = '';
    itinerary: string =''
    cityId: string = '';
    meetingpoint: string = '';
    numberMaxParticipants: number;
    rideTypeId: number;
    rideLevelId: number;
    rideStatusId: number;
    createdAt: Date = new Date();
    updatedAt: Date = new Date();
}
