import { BikerideModel } from 'src/app/models/bikeride.models';

export class UserModel {
    id?: number;
    firstName: string = '';
    lastName: string = '';
    nickName: string = '';
    birthday: Date = new Date();
    email: string = '';
    password: string = '';
    CityId: number;
    createdAt: Date = new Date();
    updatedAt: Date = new Date();
    Bikerides: BikerideModel[];
}
