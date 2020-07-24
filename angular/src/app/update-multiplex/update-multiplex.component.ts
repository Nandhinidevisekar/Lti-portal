import { Component, OnInit } from '@angular/core';
import { Multiplex } from '../multiplex/multiplex';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MultiplexService} from '../service/multiplex.service';

@Component({
  selector: 'app-update-multiplex',
  templateUrl: './update-multiplex.component.html',
  styleUrls: ['./update-multiplex.component.css']
})
export class UpdateMultiplexComponent implements OnInit {

  multiplex:Multiplex;
  updateMultiplex:FormGroup;
  constructor(private multiplexService:MultiplexService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    let multiplexid= window.localStorage.getItem("editmultiplexid");
    this.updateMultiplex= this.formBuilder.group({
      id:[''],
      multiplexName:['',Validators.required],
      location:['',Validators.required],
      noOfScreen:['',Validators.required]
    });
    this.multiplexService.getMultiplexByID(multiplexid).subscribe(data=>{
      console.log(data);
      console.log(JSON.parse(JSON.stringify(data)));
      //this.updateMovie.setValue=JSON.parse(JSON.stringify(data));
      this.updateMultiplex.setValue({
        multiplexName:data.multiplexName, location:data.location, noOfScreen:data.noOfScreen,id:data.id
      });
    });
  }

  onSubmit()
  {
    this.multiplexService.updateMultipplex(this.updateMultiplex.value).subscribe(data=>{
     
        alert('Movie updated successfully.');
        this.router.navigate(['listmovie']);
      
    });
  }

}
