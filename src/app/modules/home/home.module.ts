import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from 'src/app/components/home/home.component';
import { MaterialModule } from '../material.module';
import { MovieCardLandscapeComponent } from 'src/app/components/movie-card-landscape/movie-card-landscape.component';
import { MovieSearchComponent } from 'src/app/components/movie-search/movie-search.component';

@NgModule({
  declarations: [
    HomeComponent,
    MovieCardLandscapeComponent,
    MovieSearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
  ]
})
export class HomeModule { }
