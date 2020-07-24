import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  errorMessage : string;
  autherized : boolean
  constructor(public auth: AuthenticationService, public router: Router) { 
    this.errorMessage = "Invalid Credentials!!!";
    this.autherized = true;
  }

  login(txtLogin: HTMLInputElement, txtPass : HTMLInputElement){
      
    this.auth.authenticate(txtLogin.value, txtPass.value)
      .subscribe(
        // success Method
        (successData:string) => {
          console.log("LOGIN SUCCESS :" + successData);
          this.autherized = true; 
          this.router.navigate(['/listmovie']);
        },
        // failure
        failureData => {
          console.log("LOGIN FAILURE :" + failureData);
          this.autherized = false;
        }
      );

   /* if(this.auth.authenticate(txtLogin.value, txtPass.value)){
        this.autherized = true; 
        this.router.navigate(['/product']);
      }else{
          this.autherized = false;
      }*/ 
  }

  search()
  {
    console.log("hi");
    this.router.navigate(['/search']);
  }
  ngOnInit() {
  }

}
