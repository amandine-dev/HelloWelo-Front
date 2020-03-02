export class BikerideModel {
    id?: number;
    title: string = '';
    date: Date = new Date();
    // time à changer//
    time: number;
    city: string = '';
    state: string = '';
    country: string = '';
    meetingpoint: string = '';
    km: number;
    description: string = '';
    nbparticipants: number;
    level: number;
    createdAt: Date = new Date();
    updatedAt: Date = new Date();
}
