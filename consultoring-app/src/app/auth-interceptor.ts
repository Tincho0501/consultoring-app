import { HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const securityToken = localStorage.getItem('token');

    if(!securityToken) {
      return next.handle(req);
    }

    const request = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + securityToken)
    });

    return next.handle(request);
  }
}
