import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptorService implements HttpInterceptor{

  // constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone(
      {
        setHeaders: {Authorization: 'Beaver token'}
      }
    );

    return next.handle(request);
  }
}
