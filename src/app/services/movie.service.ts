import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl = "https://api.themoviedb.org/3/";
  posterBaseUrl = 'https://image.tmdb.org/t/p/w185';
  backdropBaseUrl = 'https://image.tmdb.org/t/p/w780';
  apiKey = "e3d1561289200a7373c546584da40679";

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Movie[]> {
    return this.http.get<any>(`${this.baseUrl}movie/popular?api_key=${this.apiKey}&language=en-US&page=1`)
    .pipe(map((response: any) => {
      return response.results.map((item: any) => {
        return this.parseResponseToMovie(item);
      });
    }));
  }

  getTopRatedMovies(): Observable<Movie[]> {
    return this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`)
    .pipe(map((response: any) => {
      return response.results.map((item: any) => {
        return this.parseResponseToMovie(item);
      });
    }));
  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.http.get(`${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`)
    .pipe(map((response: any) => {
      return response.results.map((item: any) => {
        return this.parseResponseToMovie(item);
      });
    }));
  }

  getMovie(id:number): Observable<Movie> {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}&language=en-US`)
    .pipe(map((response: any) => {
      return this.parseResponseToMovie(response);
    }))
  }

  searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      return of([]);
    } 
    return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}&language=en-US&query=${term}&page=1`)
    .pipe(map((response: any) => {
      return response.results.map((item: any) => {
        return this.parseResponseToMovie(item);
      })
    }))
  } 

  parseResponseToMovie(res: any) {
    return {
      id: res.id,
      voteAverage: res.vote_average*10,
      title: res.title,
      posterPath: `${this.posterBaseUrl}${res.poster_path}`,
      backdropPath: `${this.backdropBaseUrl}${res.backdrop_path}`,
      overview: res.overview,
      releaseDate: res.release_date,
      status: res.status,
      runtime: res.runtime,
      revenue: res.revenue,
      budget: res.budget
    }
  }
}
