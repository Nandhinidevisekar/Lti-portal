import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Multiplex} from '../multiplex/multiplex';
const VAIDATION_URL= "http://localhost:8765/micro-multiplex/api/multiplex";

@Injectable({
  providedIn: 'root'
})
export class MultiplexService {

  constructor(private http:HttpClient) { }

  createMultiplex(multiplex: Multiplex):Observable<Multiplex>
     {
      let authToken = sessionStorage.getItem("token");
      let headers = new HttpHeaders({
        Authorization : authToken,
        });
       
      return this.http.post(VAIDATION_URL+'/create', multiplex,{headers,responseType : "json"}).pipe(
        map(res=> res as Multiplex));
     }

     getMultiplexes():Observable<any>
     {
       let authToken = sessionStorage.getItem("token");
      let headers = new HttpHeaders({
        Authorization : authToken,
        });
        return this.http.get(VAIDATION_URL+'/multiplexes',{headers,responseType : "json"}).pipe(
          map(res=> res ));
    }

    deleteMultiplex(id:String)
    {
      let authToken = sessionStorage.getItem("token");
      let headers = new HttpHeaders({
        Authorization : authToken,
        });
        return this.http.delete(VAIDATION_URL +'/'+id,{headers,responseType : "text"}).pipe(
          map(res=> res ));
    }

    getMultiplexByID(id:String)
    {
      let authToken = sessionStorage.getItem("token");
      let headers = new HttpHeaders({
        Authorization : authToken,
        });
        return this.http.get(VAIDATION_URL +'/'+id,{headers,responseType : "json"}).pipe(
          map(res=> res as Multiplex));
    }
    
    updateMultipplex(multiplex: Multiplex):Observable<Multiplex>
    {
     let authToken = sessionStorage.getItem("token");
     let headers = new HttpHeaders({
       Authorization : authToken,
       });
      
     return this.http.put(VAIDATION_URL+'/'+multiplex.id, multiplex,{headers,responseType : "json"}).pipe(
       map(res=> res as Multiplex));
    }
    

}
