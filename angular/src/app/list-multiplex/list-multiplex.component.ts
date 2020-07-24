import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{MultiplexService} from '../service/multiplex.service';
import{Multiplex} from '../multiplex/multiplex';

@Component({
  selector: 'app-list-multiplex',
  templateUrl: './list-multiplex.component.html',
  styleUrls: ['./list-multiplex.component.css']
})
export class ListMultiplexComponent implements OnInit {

  multiplexes:Multiplex[];
  constructor(private router:Router,private multiplexService :MultiplexService) { }

  ngOnInit(): void {
    this.multiplexService.getMultiplexes().subscribe(data=>{
      console.log("list");
      console.log(data);
      this.multiplexes=data;
    });
  }

  deleteMultiplex(multiplex:Multiplex)
  {
    this.multiplexService.deleteMultiplex(multiplex.id).subscribe(data=>{
      console.log(data);
      if(data=="success")
      {
        this.router.navigate(['/listmultiplex']);
      }
      else{
        alert("OOPS!Something went wrong");
      }
    });
  }

  updateMultiplex(multiplex:Multiplex)
  {
    window.localStorage.removeItem("editmultiplexid")
    window.localStorage.setItem("editmultiplexid",multiplex.id.toString());
    this.router.navigate(['/updatemultiplex']);
  }


}
