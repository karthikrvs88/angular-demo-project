import { HttpInterceptorFn } from '@angular/common/http';
import { of } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
//  const token = "121212121212121212sffsdfd";
//   const modifiedReq = req.clone({
//     setHeaders : {
//       Authorization : `Bearer ${token}`
//     }
  return of(null).pipe(
    delay(300),
    mergeMap(() => {
      if(req.url.includes("typicode.com") && req.method=="POST") {
        const body = JSON.stringify({ title: 'New inter Post', body: 'This is a new inter post', userId: 111, id: 111 });
        return of(new HttpResponse({
          status: 200,
          body: JSON.parse(body)
        }));
    }
    return next(req);
  }))

  //return next(modifiedReq);
};
