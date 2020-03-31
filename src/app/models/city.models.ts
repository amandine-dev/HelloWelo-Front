export class CityModel {
    id?: number;
    name: string = '';
    stateCode: string ='';
    countryCode: string ='';
    latitude: number;
    longitude: number;
    flag: number;
    wikiDataId: string ='';
    createdAt: Date = new Date();
    updatedAt: Date = new Date();
}
