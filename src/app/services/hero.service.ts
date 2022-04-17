import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Hero } from '../Hero';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private apiUrl = 'http://localhost:3000/heroes';
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.apiUrl);
  }

  getHero(id: number): Observable<Hero>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Hero>(url);
  }

  rateHero(hero: Hero): Observable<Hero>{
    const url = `${this.apiUrl}/${hero.id}`;
    return this.http.put<Hero>(url, hero, httpOptions);
  }
}
