import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
const VAIDATION_URL= "http://localhost:8765/micro-user/api/user/login";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  /*authenticate(loginid : string, password : string):boolean{
    // hard coded validation
    if(loginid === "First" && password === "abc"){
      // need to maintain status : session storage
      sessionStorage.setItem("user", loginid);
      return true;
    }else{
        return false;
    }
  }*/
  authenticate(loginid : string, password : string){
    // convert credentials into basic auth token
    let authToken = "Basic " + window.btoa(loginid + ":" + password);
    console.log(authToken);
    
    // header to sent with request
    let headers = new HttpHeaders({
      Authorization : authToken
      
    });

    return this.http.get(VAIDATION_URL, {headers,responseType : "text" }).pipe(
      // success
      map((successData:string) => {
        console.log("AUTH SUCCESS :" +  successData);
        sessionStorage.setItem("user", loginid);
        sessionStorage.setItem("token", authToken);
        return successData;
      }),
      // failure
      map((failureData:string) => {
        console.log("AUTH FAILED :" +  failureData);
        return failureData;
      })
    );

  }

  // method to return token
  getAuthenticationToken(){
    return sessionStorage.getItem("token");
  }


  isUserLoggedIn(): boolean{
    // if 'user' key is present
    let user = sessionStorage.getItem('user');
    if(user == null)
      return false;
    else
      return true;  
  }

  //  can have method to return type of user

  logout(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  }


}
