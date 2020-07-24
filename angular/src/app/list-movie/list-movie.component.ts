import { Component, OnInit } from '@angular/core';
import{MovieService} from "../service/movie.service";
import{Movie} from "../movie/movie";
import{Router} from "@angular/router";



@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  movies:Movie[];
  constructor(private movieService:MovieService,private router:Router) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data=>{
      console.log("list");
      console.log(data);
      this.movies=data;
    });
  }

  deleteMovie(movie:Movie)
  {
    this.movieService.deleteMovie(movie.id).subscribe(data=>{
      console.log(data);
      if(data=="success")
      {
        this.router.navigate(['/listmovie']);
      }
      else{
        alert("OOPS!Something went wrong");
      }
    });
  }

  updateMovie(movie:Movie)
  {
    window.localStorage.removeItem("editmovieid")
    window.localStorage.setItem("editmovieid",movie.id.toString());
    this.router.navigate(['/updatemovie']);
  }

}
