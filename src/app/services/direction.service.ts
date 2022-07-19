import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Direction } from '../models/direction';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  url: string = 'http://localhost:8080/directions';

  constructor(private http: HttpClient) { }

  getDirections(): Observable<Direction[]>{
    return this.http.get<Direction[]>(this.url+'/list');
  }

  getPersons(): Observable<Person[]>{
    return this.http.get<Person[]>(this.url+'/persons');
  }

  registerDirection(direction: Direction): Observable<Object>{
    return this.http.post<Object>(this.url+'/create', direction);
  }

  searchPerson(direction: Direction) {
    const url = `${environment.serviceBaseUrl}/search/` + direction.id_person.name + '/' + direction.id_person.surname + '/' + direction.id_person.email;
    const formParams = new HttpParams();
    return this.http.get<Direction[]>(url);

  }
}
