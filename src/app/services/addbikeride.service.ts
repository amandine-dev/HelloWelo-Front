import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BikerideModel } from '../models/bikeride.model';

@Injectable({
  providedIn: 'root'
})
export class AddbikerideService {

  constructor(private http: HttpClient) { }
  //CRUD De l'Addbikeride

  
  save(bikeride: BikerideModel): Observable<BikerideModel> {
    return this.http.post<BikerideModel>('/', bikeride);
  }


}
