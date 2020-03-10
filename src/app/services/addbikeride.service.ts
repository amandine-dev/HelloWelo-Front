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
    return this.http.post<BikerideModel>('http://localhost:3000/bikeride', bikeride);
  }
  
  getBikerides(): Observable<BikerideModel[]> {
    return this.http.get<BikerideModel[]>('http://localhost:3000/bikeride');
  }

  find(id: number): Observable<BikerideModel[]> {
    return this.http.get<BikerideModel[]>('http://localhost:3000/bikeride/' + id);
  }

  delete(bikeride: BikerideModel): Observable<void> {
    return this.http.delete<void>('http://localhost:3000/bikeride/' + bikeride.id);
  }

  update(bikeride: BikerideModel): Observable<void> {
    return this.http.put<void>('http://localhost:3000/bikeride', bikeride);
  }


}


