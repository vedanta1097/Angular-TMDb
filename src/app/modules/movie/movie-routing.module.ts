import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';
import { MovieDetailComponent } from 'src/app/components/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  },
  {
    path: 'top-rated',
    component: MovieListComponent
  },
  {
    path: 'upcoming',
    component: MovieListComponent
  },
  {
    path: 'detail/:id',
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
