import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import{MultiplexService} from '../service/multiplex.service';

@Component({
  selector: 'app-create-multiplex',
  templateUrl: './create-multiplex.component.html',
  styleUrls: ['./create-multiplex.component.css']
})
export class CreateMultiplexComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router,private multiplexService:MultiplexService) { }

  createMultiplex:FormGroup;

  ngOnInit(): void {
    this.createMultiplex=this.formBuilder.group({
      id:[],
      multiplexName:['',Validators.required],
      location:['',Validators.required],
      noOfScreen:['',Validators.required]
    });
  }
  onSubmit(){
    alert("success");

    this.multiplexService.createMultiplex(this.createMultiplex.value)
    .subscribe(data=>{
    console.log("succ");
    console.log(data);
    this.router.navigate(['/listmultiplex']);
    });
  }

}
