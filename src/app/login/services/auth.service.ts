import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl:string = environment.baseUrl;
  private http = inject(HttpClient);


  login(email:string, password:string): Observable<boolean>{
    const url = `${this.baseUrl}/auth/login`;
    const body = {email,password};
    return this.http.post(url, body).pipe(
      tap( (data) => {
        console.log(data);
      }),
      map( ()=> true),
      catchError( err => throwError(()=>err.error.message))
    );
  }
}
