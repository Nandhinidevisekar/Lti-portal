import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Movie} from '../movie/Movie';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import{AuthenticationService} from '../service/authentication.service';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';


const VAIDATION_URL= "http://localhost:8765/micro-movie/api/movie";


@Injectable({
  providedIn: 'root'  
})
export class MovieService {



  constructor(private http:HttpClient,private auth:AuthenticationService) {}

    createMovie(movie: Movie):Observable<Movie>
     {
      let authToken = sessionStorage.getItem("token");
      let headers = new HttpHeaders({
        Authorization : authToken,
        });
       
      return this.http.post(VAIDATION_URL+'/create', movie,{headers,responseType : "json"}).pipe(
        map(res=> res as Movie));
     }

     getMovies():Observable<any>
     {
       let authToken = sessionStorage.getItem("token");
      let headers = new HttpHeaders({
        Authorization : authToken,
        });
        return this.http.get(VAIDATION_URL+'/movies',{headers,responseType : "json"}).pipe(
          map(res=> res ));
    }

    deleteMovie(id:String)
    {
      let authToken = sessionStorage.getItem("token");
      let headers = new HttpHeaders({
        Authorization : authToken,
        });
        return this.http.delete(VAIDATION_URL +'/'+id,{headers,responseType : "text"}).pipe(
          map(res=> res ));
    }

    getMovieByID(id:String)
    {
      let authToken = sessionStorage.getItem("token");
      let headers = new HttpHeaders({
        Authorization : authToken,
        });
        return this.http.get(VAIDATION_URL +'/'+id,{headers,responseType : "json"}).pipe(
          map(res=> res as Movie));
    }
    
    updateMovie(movie: Movie):Observable<Movie>
    {
     let authToken = sessionStorage.getItem("token");
     let headers = new HttpHeaders({
       Authorization : authToken,
       });
      
     return this.http.put(VAIDATION_URL+'/'+movie.id, movie,{headers,responseType : "json"}).pipe(
       map(res=> res as Movie));
    }
    
    getMovieByName(title:String):Observable<Movie[]>
    {

    let loginid="Visitor";
    let password="abc";
       let authToken = "Basic " + window.btoa(loginid + ":" + password);

      console.log(authToken);
      let headers = new HttpHeaders({
        Authorization : authToken,
        });
        return this.http.get(VAIDATION_URL +'/search/'+title,{headers,responseType : "json"}).pipe(
          debounceTime(500), map(
           ( res:Movie[])=> {return (
              res.length != 0 ? res as Movie[] : [{"name": "No Record Found"} as any]
          );

           }
            
            ));
    }
    

   
}
