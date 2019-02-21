import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(
    private router: Router,
    private movieService: MovieService
  ) { }

  link: string;
  movies: Movie[];

  ngOnInit() {
    this.link = this.router.url;
    if (this.link === '/movie') {
      this.getPopular();
    } else if (this.link === '/movie/top-rated') {
      this.getTopRated();
    } else if (this.link === '/movie/upcoming') {
      this.getUpcoming();
    }
  }

  getPopular() {
    this.movieService.getPopularMovies()
      .subscribe( response => {
        this.movies = response;
      });
  }

  getTopRated() {
    this.movieService.getTopRatedMovies()
      .subscribe( response => {
        this.movies = response;
      });
  }

  getUpcoming() {
    this.movieService.getUpcomingMovies()
      .subscribe( response => {
        this.movies = response;
      });
  }

}
