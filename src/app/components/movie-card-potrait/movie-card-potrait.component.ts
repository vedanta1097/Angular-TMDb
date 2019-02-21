import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/model/Movie';

@Component({
  selector: 'app-movie-card-potrait',
  templateUrl: './movie-card-potrait.component.html',
  styleUrls: ['./movie-card-potrait.component.css']
})
export class MovieCardPotraitComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
