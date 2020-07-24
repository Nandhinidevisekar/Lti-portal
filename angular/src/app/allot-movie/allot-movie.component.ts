import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {MovieService} from '../service/movie.service';
import {MultiplexService} from '../service/multiplex.service';
import{Movie} from '../movie/movie';
import{Multiplex} from '../multiplex/multiplex';
import{AllotmovieService} from '../service/allotmovie.service';
import {FormBuilder, FormGroup, Validators,ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-allot-movie',
  templateUrl: './allot-movie.component.html',
  styleUrls: ['./allot-movie.component.css']
})
export class AllotMovieComponent implements OnInit {

  movies:Movie[];
  multiplexes:Multiplex[];
  screens:number[]=[];
  allotMovie:FormGroup;
  screeno:number;
  constructor(private router:Router,private movieService:MovieService,
    private multiplexService:MultiplexService,private formBuilder:FormBuilder,
    private allotmovieService:AllotmovieService) { }

  ngOnInit(): void {

    this.allotMovie=this.formBuilder.group({
      id:[],
      multiplexId:['',Validators.required],
      movieId:['',Validators.required],
      screenno:['',Validators.required]
    });

    this.movieService.getMovies().subscribe(data=>{
      this.movies=data;
    });

    this.multiplexService.getMultiplexes().subscribe(data=>{
        this.multiplexes=data;
        console.log("allotmovie");
        console.log(data);
        
    });
  }

  onSubmit()
  {
    this.allotmovieService.saveMovieMultiplexMapping(this.allotMovie.value).subscribe(data=>
      {
console.log(data);
alert("Mapped Successfully");
this.router.navigate(['/listallotmovie']);
      });
  }

  loadScreens(event:any)
  {
    this.screens=[];
    console.log("load screen");
    let value=event.target.value;
    console.log("value");
    console.log(value);
    this.multiplexService.getMultiplexByID(value).subscribe(data=>{
      //console.log(data);
      //console.log(JSON.parse(JSON.stringify(data)));
      //this.updateMovie.setValue=JSON.parse(JSON.stringify(data));
      this.screeno=data.noOfScreen;
      console.log(this.screeno);
      for (let i = 1; i <=this.screeno; i++) { 
        console.log ("Block statement execution no." + i);
       // this.screenno=this.multiplexes[i].noOfScreen;
        this.screens.push(i);

      }
    });
           
  }

  checkCombination(event:any)
  {
    // let screenno=event.target.value;
    // let multiplexId= this.allotMovie.value.multiplexId;
    // alert(multiplexId);

    this.allotmovieService.findByMultiplexIdAndScreenno(this.allotMovie.value).subscribe(data=>
      {
console.log(data);
if(data!=null)
{
alert("combination exist! please select different screen no");
this.router.navigate(['/listallotmovie']);
}
  });
  }
}
