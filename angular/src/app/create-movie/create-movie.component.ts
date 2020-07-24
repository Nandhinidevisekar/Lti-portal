import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder, FormGroup, Validators,ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import{MovieService} from "../service/movie.service";


@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router,private movieService:MovieService) { }

  createMovie:FormGroup;
  name:FormControl;
  category:FormControl;
  producer:FormControl;
  director:FormControl
  ngOnInit(): void {;
    
    this.createMovie=this.formBuilder.group({
      id:[],
      name:new FormControl("", Validators.required),
      category:new FormControl("", Validators.required),
      producer:new FormControl("", Validators.required),
      director:new FormControl("", Validators.required)
    });
  }
  onSubmit(){
    //alert("success");
   
    this.movieService.createMovie(this.createMovie.value)
    .subscribe(data=>{
console.log("succ");
console.log(data);
this.router.navigate(['/listmovie']);
    });
  
  }
}
