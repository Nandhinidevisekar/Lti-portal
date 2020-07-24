import { Component, OnInit } from '@angular/core';
import { map, tap, debounceTime, distinctUntilChanged, switchMap, flatMap } from 'rxjs/operators';
import {Movie} from '../movie/movie';
import { Observable } from 'rxjs';
import { FormControl } from "@angular/forms";
import { MovieService } from '../service/movie.service';
import { Router } from '@angular/router';
import{AllotmovieService} from '../service/allotmovie.service';
import { allotMovieDetail } from '../movie/allotMovieDetail';

@Component({ 
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movieTitle = new FormControl();
  movies: Movie[];
  allotlist:allotMovieDetail[];
  searchedin:boolean;
  show:boolean;
  id:any;

  constructor(private movieService:MovieService,private router:Router,private allotservice:AllotmovieService) { }

  ngOnInit(): void {
    //  this.movies = this.movieTitle.valueChanges.pipe( debounceTime( 400 ),
    //   distinctUntilChanged(),
    //   tap(() => this.moviesLoading = true ),
    // switchMap( title => this.movieService.getMovieByName( title ) ),
    // tap(() => this.moviesLoading = false ) );
    //  console.log(this.movies);

     this.movieTitle.valueChanges.subscribe( 
      term => {
        if (term != '') {
          this.movieService.getMovieByName(term).subscribe(
            data => {
              this.movies = data;
              //console.log(data);
              this.searchedin=false;
              //console.log(data[0].BookName);
          })
        }
    });
// console.log("init");
//       this.movieService.getMovieByName("Toy Story").subscribe(data=>{
//         console.log("inside");
// console.log(data);
       
  }

  searchCall()
  {
    let movieid= window.localStorage.getItem("selectedid");
    console.log("name"+movieid);
    this.allotservice.findByMovieId(movieid).subscribe(data=>{
      console.log(data);
      this.allotlist=data;
      if(this.allotlist.length>0)
      {
      this.searchedin=true;
     // this.show=false;
      }else{
        alert("No record Found");
        //this.show=true;
      }
      window.localStorage.removeItem("selectedid");
      
    });
    

  }
  proxyValue:any;
  selectedOption(event$)
  {
    this.proxyValue = event$.option.value.name;

    this.id = event$.option.value.id;

    let selectdid= window.localStorage.setItem("selectedid",this.id);
   // this.movieTitle.setValue=name;
  }
}
