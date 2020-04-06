export class ParticipantModel {
    id?: number;
    isOrganiser: boolean;
    BikeRideId: number;
    UserId: number;
    createdAt: Date = new Date();
    updatedAt: Date = new Date();
}

