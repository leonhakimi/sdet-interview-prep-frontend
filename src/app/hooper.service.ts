import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hooper } from 'Hooper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HooperService {
  constructor(private http: HttpClient) {}

  getAllHoopers(): Observable<Hooper[]> {
    return this.http.get<Hooper[]>('http://localhost:8080/hoopers');
  }

  addHooper(
    firstName: string,
    lastName: string,
    jerseyNum: any,
    salary: any
  ): Observable<Hooper> {
    return this.http.post<Hooper>('http://localhost:8080/hoopers', {
      firstName: firstName,
      lastName: lastName,
      jerseyNum: jerseyNum,
      salary: salary,
    });
  }
}
