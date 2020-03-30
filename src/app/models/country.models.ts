export class CityModel {
    id?: number;
    name: string = '';
    iso3: string ='';
    iso2: string ='';
    phonecode: string ='';
    capital: string ='';
    currency: string ='';
    flag: number;
    wikiDataId: string ='';
    createdAt: Date = new Date();
    updatedAt: Date = new Date();
}
