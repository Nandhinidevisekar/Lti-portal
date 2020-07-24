import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import{MovieService} from "../service/movie.service";
import{Movie} from "../movie/movie";

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  movie:Movie;
  updateMovie:FormGroup;
  constructor(private movieserice:MovieService,private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    let movieId= window.localStorage.getItem("editmovieid");

    this.updateMovie=this.formBuilder.group({
      id:[''],
      name:['',Validators.required],
      category:['',Validators.required],
      producer:['',Validators.required],
      director:['',Validators.required]
    });

    this.movieserice.getMovieByID(movieId).subscribe(data=>{
      console.log(data);
      console.log(JSON.parse(JSON.stringify(data)));
      //this.updateMovie.setValue=JSON.parse(JSON.stringify(data));
      this.updateMovie.setValue({
        name:data.name, category:data.category, producer:data.producer,director:data.director,id:data.id
      });
    });
  }

  onSubmit()
  {
    this.movieserice.updateMovie(this.updateMovie.value).subscribe(data=>{
     
        alert('Movie updated successfully.');
        this.router.navigate(['listmovie']);
      
    });
  }

}
