import { Injectable } from '@angular/core';
import { allotMovie } from '../movie/allotMovie';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const VAIDATION_URL= "http://localhost:8765/micro-allotmovie/api/allotmovie";
@Injectable({
  providedIn: 'root'
})
export class AllotmovieService {

  constructor(private http:HttpClient) { }

  saveMovieMultiplexMapping(allotmovie:allotMovie):Observable<any>
  {
    let authToken = sessionStorage.getItem("token");
    let headers = new HttpHeaders({
      Authorization : authToken,
      });
     
    return this.http.post(VAIDATION_URL+'/save'+'/'+allotmovie.movieId+'/'+allotmovie.multiplexId, allotmovie,{headers,responseType : "json"}).pipe(
      map(res=> res as allotMovie));  }

      findByMultiplexIdAndScreenno(allotmovie:allotMovie)
{
  let authToken = sessionStorage.getItem("token");
    let headers = new HttpHeaders({
      Authorization : authToken,
      });
     
    return this.http.get(VAIDATION_URL+'/'+allotmovie.multiplexId+'/'+allotmovie.screenno,{headers,responseType : "json"}).pipe(
      map(res=> res as allotMovie)); 
}
getAllAllotedList():Observable<any>
{
  let authToken = sessionStorage.getItem("token");
    let headers = new HttpHeaders({
      Authorization : authToken,
      });
  return this.http.get(VAIDATION_URL+'/allotlist',{headers,responseType:"json"}).pipe(
    map(res=> res)
  );
}

findByMovieId(movieid:string):Observable<any>
{
  let loginid="Visitor";
  let password="abc";
     let authToken = "Basic " + window.btoa(loginid + ":" + password);
    let headers = new HttpHeaders({
      Authorization : authToken,
      });
  return this.http.get(VAIDATION_URL+'/searchlist/'+movieid,{headers,responseType:"json"}).pipe(
    map(res=> res)
  );
}
}


