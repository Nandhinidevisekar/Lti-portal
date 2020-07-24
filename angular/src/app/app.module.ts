import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import{MovieService} from "./service/movie.service";
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import{LoginComponent} from './login/login.component';
import { CreateMultiplexComponent } from './create-multiplex/create-multiplex.component';
import { ListMultiplexComponent } from './list-multiplex/list-multiplex.component';
import { DeleteMultiplexComponent } from './delete-multiplex/delete-multiplex.component';
import { UpdateMultiplexComponent } from './update-multiplex/update-multiplex.component';
import { AllotMovieComponent } from './allot-movie/allot-movie.component';
import { ListAllotmovieComponent } from './list-allotmovie/list-allotmovie.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchComponent } from './search/search.component';
import {  MatInputModule } from '@angular/material/input';
import{MatAutocompleteModule} from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    CreateMovieComponent,
    UpdateMovieComponent,
    DeleteMovieComponent,
    ListMovieComponent,
    MenuComponent,LoginComponent, CreateMultiplexComponent, ListMultiplexComponent, DeleteMultiplexComponent, UpdateMultiplexComponent, AllotMovieComponent, ListAllotmovieComponent, LogoutComponent, SearchComponent
  ], 
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,
    MatInputModule,MatAutocompleteModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
