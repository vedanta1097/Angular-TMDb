import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/model/Movie';

@Component({
  selector: 'app-movie-card-landscape',
  templateUrl: './movie-card-landscape.component.html',
  styleUrls: ['./movie-card-landscape.component.css']
})
export class MovieCardLandscapeComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
