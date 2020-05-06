import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpParams, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';



export class LoginInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const myToken = localStorage.getItem('token');

        if(myToken) {
            let cloneReq = req.clone({
                params : new HttpParams().set('access_token', myToken)
            });
            return next.handle(cloneReq);

        }
        else {
          return next.handle(req);  
        }
    }
}

export const LoginInterceptorProvider = {
    provide : HTTP_INTERCEPTORS,
    useClass : LoginInterceptor,
    multi : true
}

