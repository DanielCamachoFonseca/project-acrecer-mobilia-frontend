import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url: string = 'http://localhost:8080/persons';

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]>{
    return this.http.get<Person[]>(this.url+'/list');
  }

  registerPerson(person: Person): Observable<Object>{
    return this.http.post<Object>(this.url+'/create', person);
  }
}
