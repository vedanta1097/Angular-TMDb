import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/model/Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularMovies: Movie[];
  topRatedMovies: Movie[];
  upcomingMovies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getPopular();
    this.getTopRated();
    this.getUpcoming();
  }

  getPopular() {
    this.movieService.getPopularMovies()
      .subscribe( response => {
        this.popularMovies = response.slice(0, 3);
      });
  }

  getTopRated() {
    this.movieService.getTopRatedMovies()
      .subscribe( response => {
        this.topRatedMovies = response.slice(0, 3);
      });
  }

  getUpcoming() {
    this.movieService.getUpcomingMovies()
      .subscribe( response => {
        this.upcomingMovies = response.slice(0, 3);
      });
  }
}
