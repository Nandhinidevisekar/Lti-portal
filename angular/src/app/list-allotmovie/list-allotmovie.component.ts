import { Component, OnInit } from '@angular/core';
import{AllotmovieService} from '../service/allotmovie.service';
import { allotMovieDetail } from '../movie/allotMovieDetail';

@Component({
  selector: 'app-list-allotmovie',
  templateUrl: './list-allotmovie.component.html',
  styleUrls: ['./list-allotmovie.component.css']
})
export class ListAllotmovieComponent implements OnInit {

  allotlist:allotMovieDetail[];

  constructor(private allotservice:AllotmovieService) { }

  ngOnInit(): void {
    this.allotservice.getAllAllotedList().subscribe(data=>{
      console.log("allt- list");
      console.log(data);
      this.allotlist=data;
      
    });
  }

}
