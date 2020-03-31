export class UserModel {
    id?: number;
    lastname: string = '';
    firstName: string = '';
    nickName: string = '';
    birthday: Date = new Date();
    email: string = '';
    password: string = '';
    cityId: number;
    createdAt: Date = new Date();
    updatedAt: Date = new Date();
}
