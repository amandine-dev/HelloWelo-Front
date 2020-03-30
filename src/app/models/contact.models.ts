export class ContactModel {
    id?: number;
    username: string = '';
    usermail: string = '';
    message: string = '';
    createdAt: Date = new Date();
    updatedAt: Date = new Date();
}
