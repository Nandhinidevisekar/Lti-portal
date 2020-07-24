import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler,HtttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private auth:AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HtttpEvent<any>> {
    if(this.auth.isUserLoggedIn()){
      let token = this.auth.getAuthenticationToken();

      request = request.clone({
        setHeaders : {
          Authorization : token
        }
      });

      // must return the updated request object : otherwise request stop
      return next.handle(request);
    }
  }

}
