export class ParticipantModel {
    id?: number;
    isOrganiser: boolean;
    bikerideId: number;
    userId: number;
    createdAt: Date = new Date();
    updatedAt: Date = new Date();
   }