import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';
import{ListMovieComponent} from './list-movie/list-movie.component';
import{CreateMovieComponent} from './create-movie/create-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import {ListMultiplexComponent} from './list-multiplex/list-multiplex.component';
import {CreateMultiplexComponent} from './create-multiplex/create-multiplex.component';
import{UpdateMultiplexComponent} from './update-multiplex/update-multiplex.component';
import{AllotMovieComponent} from './allot-movie/allot-movie.component';
import {ListAllotmovieComponent} from './list-allotmovie/list-allotmovie.component';
import{LogoutComponent} from './logout/logout.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  {path:"", redirectTo : "login", pathMatch : "full"},
   {path:"login", component : LoginComponent},
  {path:"listmovie",component:ListMovieComponent},
  {path:"createmovie",component:CreateMovieComponent},
  {path:"updatemovie",component:UpdateMovieComponent},
  {path:"listmultiplex",component:ListMultiplexComponent},
  {path:"createmultiplex",component:CreateMultiplexComponent},
  {path:"updatemultiplex",component:UpdateMultiplexComponent},
  {path:"allotmovie",component:AllotMovieComponent},
  {path:"listallotmovie",component:ListAllotmovieComponent},
  {path:"logout",component:LogoutComponent},
  {path:"search",component:SearchComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
