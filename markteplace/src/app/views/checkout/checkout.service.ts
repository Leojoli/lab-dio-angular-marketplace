import { Injectable } from '@angular/core';
import { Film } from '../list-films/film.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  public baseURL: string = 'http:///localhost:3001';
  public listFilm: Film[] = [];

  constructor(private httClient: HttpClient) { }

  getListFilm(): Observable<Film[]> {
    return this.httClient.get<Film[]>(`${this.baseURL}/films`);
  }
}
