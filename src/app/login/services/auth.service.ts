import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { UserResponse } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl:string = environment.baseUrl;
  private http = inject(HttpClient);

  currentUser = signal<UserResponse|null>(null);

  login(email:string, password:string): Observable<boolean>{
    const url = `${this.baseUrl}/auth/login`;
    const body = {email,password};
    return this.http.post<UserResponse>(url, body).pipe(
      tap( (data) => {
        this.currentUser.set(data);
      }),
      map( ()=> true),
      catchError( err => throwError(()=>err.error.message))
    );
  }
}
