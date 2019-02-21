import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';
import { MaterialModule } from '../material.module';
import { MovieCardPotraitComponent } from 'src/app/components/movie-card-potrait/movie-card-potrait.component';
import { SubstringPipe } from 'src/app/pipes/substring.pipe';
import { MovieDetailComponent } from 'src/app/components/movie-detail/movie-detail.component';
import { MinuteToHourPipe } from 'src/app/pipes/minute-to-hour.pipe';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieCardPotraitComponent,
    SubstringPipe,
    MovieDetailComponent,
    MinuteToHourPipe
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    MaterialModule,
  ]
})
export class MovieModule { }
