import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worlds } from '../types/world';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  baseUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  getWorlds(): Observable<Worlds[]> {
    return this.http.get<Worlds[]>(`${this.baseUrl}/all`);
  }

  getSearch(query: string): Observable<Worlds[]> {
    return this.http.get<Worlds[]>(`${this.baseUrl}/name/${query}`);
  }

  getRegion(query: string): Observable<Worlds[]> {
    return this.http.get<Worlds[]>(`${this.baseUrl}/region/${query}`);
  }

  getSubregion(query: string): Observable<Worlds[]> {
    return this.http.get<Worlds[]>(`${this.baseUrl}/subregion/${query}`);
  }
}
