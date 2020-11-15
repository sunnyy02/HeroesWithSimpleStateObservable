import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Hero } from "./hero";
import {
  Observable,
  Subscription,
} from "rxjs";
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class HeroApiService {
  private heroesUrl = "/api/heroes";

  constructor(private http: HttpClient) {}

  async loadAll() {
    const res = await this.http.get<any>(this.heroesUrl)
    .pipe(
      catchError(this.handleError)
    ).toPromise();
    return res as Hero[];
  }

  async getHero(id: number){
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      catchError(this.handleError)
    ).toPromise();
  }

  async add(hero: Hero) {
    return await this.http.post<any>(`${this.heroesUrl}`, hero).pipe(
      catchError(this.handleError)
    );
  }
  async save(hero: Hero) {
    return await this.http.put<any>(`${this.heroesUrl}`, hero).pipe(
      catchError(this.handleError)
    );
  }

  async delete(hero:Hero){
    return await this.http.delete<Hero>(`${this.heroesUrl}/${hero.id}`);
  }

  async search(term: string){
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      catchError(this.handleError)
    ).toPromise();
  }

  private handleError(error: HttpErrorResponse): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
}
